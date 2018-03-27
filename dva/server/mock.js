const fs = require('fs')
const path = require('path')
const url = require('url')
const _ = require('lodash')

const mockRoot = path.join(process.cwd(),'mock')

module.exports = (req, res, next) => {

    if (!/^\/api\//.test(req.url)) { 
        next()
        return
    }

    console.info('[cgi-mock] %s %s', req.method, req.url);

    req.cgiRoot = mockRoot;

    bodyParser(req, function(err){
        if( err ){
            error(res, err);
            return;
        }

        handler(req, res, function(err, ret){
            if( err ){
                error(res, err);
                return;
            }

            res.setHeader('Content-Type', 'application/json');
            res.end(ret);
        });
    })
}

// parse request body
function bodyParser(req, next){
    var chunkArr = [],
        bufLen = 0;

    req.on('data', function(chunk){
        chunkArr.push(chunk);
        bufLen += chunk.length;
    });

    req.on('end', function(){
        var input = Buffer.concat(chunkArr, bufLen).toString();

        try{
            req.data = JSON.parse(input);
        } catch(err){
            req.data = input;
        }

        next();
    });
}

// handler cgi file
function handler(req, res, next){
    var urlObj = url.parse(req.url, true);

    const filename = path.join(req.cgiRoot, urlObj.pathname.replace(/\/api\//, '')) + '.js'
    
    fs.readFile(filename, function(err, file){
        if( err ){
            err.statusCode = 404;
            next(err);
            return;
        }

        try{
            // create mock function from mock file
            var mock = new Function('req', 'res', 'next', file.toString());

            // add query object to req
            req.query = urlObj.query;

            // run mock
            mock(req, res, function (err, _mock) {
                
                let ret = null

                if (typeof _mock === 'function') { 
                    ret = _mock(req)
                }

                if (typeof _mock === 'object') { 
                    ret = _mock
                }

                if (ret != null) { 
                    next(err, JSON.stringify(ret));
                } else {
                    next(err, {
                        err: 0,
                        msg:'mock data is error'
                    })
                }                            
            });
        } catch(err){
            next(err);
        }
    });
}

// handle errors
function error(res, err){
    
    res.statusCode = err.statusCode || 500;
    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({
        code:  err.code,
        message: err.message
    }));
}
