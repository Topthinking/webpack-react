import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router-dom'

class Action extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id="user-action-list">
					<ul>
						<li className="clear-fix"><Link to="/css">CSS3效果列表</Link></li>
						<li className="clear-fix"><Link to="/js">JavaScript基础</Link></li>
					</ul>
				</div>
			)
	}
}

export default Action