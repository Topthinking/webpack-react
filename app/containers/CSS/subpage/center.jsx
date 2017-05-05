import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'


import './center.less'

class Center extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id="center">
					<div id="center1" className="center-list">
						<div className="item">1</div>
					</div>
					<div id="center2" className="center-list">
						<div className="item">2</div>
					</div>
					<div id="center3" className="center-list">
						<div className="item">3</div>
					</div>
					<div id="center4" className="center-list">
						<div className="item">4</div>
					</div>
				</div>
			)
	}
}

export default Center