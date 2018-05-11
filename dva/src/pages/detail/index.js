import React from 'react'
import Base from '../../hoc/base'

@Base
class Item extends React.Component{
    render(){
        return (
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}

export default () => {
    return (
    <React.Fragment>
        {Array.from(new Array(100)).map((item,index)=>{
            return <Item key={index}/>
        })}
    </React.Fragment>
    )
}