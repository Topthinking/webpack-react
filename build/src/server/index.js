
let ret

if (process.env.TARGET_IS_NODE) {
	ret = require('./a')
} else if (process.env.TARGET_IS_WEB) { 
	ret = require('./b')
}

export default ret