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
					<div id="animate2" className="animate-list">
						<div className="animate-title">
							<div className="item item1">旋转1</div>
							<div className="item item2">旋转2</div>
							<div className="item-line"></div>
						</div>
					</div>
					<div id="animate3" className="animate-list">
						<div className="item">翻转</div>
					</div>
				</div>
			)
	}
}

export default Animate