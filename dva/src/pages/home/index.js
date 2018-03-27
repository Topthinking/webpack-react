import React from 'react'
import { connect } from 'react-redux'
import {
  Link
} from 'react-router-dom'

class Index extends React.Component {
  render() {
    const props = this.props
    return (
      <div>
        <span>当前数字:{props.count}</span>
        <button onClick={() => { props.dispatch({ type: 'home/addCount' }) }}>123增加</button>
        <button onClick={() => { props.dispatch({ type: 'home/minusCount' }) }}>减少</button>
        <br />
        <Link to="/about">查看详情</Link>
      </div>
    )
  }
}

export default connect(({ home }) => {
  return {
    ...home
  }
})(Index)
