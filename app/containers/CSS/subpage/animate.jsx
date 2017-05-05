import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import './animate.less'
class Animate extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id="animate">
					<div id="animate1" className="animate-list">
						<div className="item">位移</div>
					</div>
				</div>
			)
	}
}

export default Animate