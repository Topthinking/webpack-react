import React from 'react'
import { connect } from 'dva'

export default connect(({ about }) => ({ 
    ...about
}))((props) => { 

    const { list,load } = props

    let inputRef

    return (
        <div>
            <h1>about</h1>
            <div>
                <h3>添加待办事项</h3>    
                <input type="text" ref={(node) => inputRef = node} />
                <button onClick={() => {
                    props.dispatch({ type: 'about/addTodoContent',inputRef})
                }}>添加</button>
            </div>
            {load ? <span>添加中...</span> : null}
            <ul>
                {list.length ? list.map(item => { 
                    return (
                        <li key={item.id}>
                            <span
                                style={{ color: item.finish ? 'red' : 'black', cursor:'pointer' }}
                                onClick={() => { props.dispatch({type:'about/finish',id:item.id})}}
                            >{item.name}</span>
                            <b
                                style={{ marginLeft: "20px", cursor: 'pointer' }}
                                onClick={() => { props.dispatch({type:'about/delete',id:item.id})}}
                            >删除</b>
                        </li>
                    )    
                }) : null}
            </ul>
        </div>
    )
})