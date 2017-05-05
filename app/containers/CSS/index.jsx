import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'

import Center from './subpage/center'
import Animate from './subpage/animate'

import './style.less'

class CSS extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	type:'',
	  	content:false,
	  	title:''
	  }
	}
	render(){
		return (
				<div>				
				{
					this.state.content
					? <div>
						<div id="common-header">
							<span className="back-icon" onClick={this.currentback.bind(this)}>
								<i className="icon-chevron-left"></i>
							</span>
							<h1>{this.state.title}</h1>
						</div>
						<div id="css-content">
					  		{this.switchState()}
					  	</div>
					  </div>
					: <div>
						<Header title="CSS效果列表"/>
						<div id="css-list">
							<ul>
								<li onClick={this.changeType.bind(this,'center','css居中')}>1.css显示居中</li>
								<li onClick={this.changeType.bind(this,'animate','css动画')}>2.css动画</li>
							</ul>
						</div>	
					  </div>
				}									
				</div>
			)
	}
	switchState(){
		switch(this.state.type) {
			case 'center':
				return <Center />
				break;
			case 'animate':
				return <Animate />
				break;
			default:
				return <div></div>
				break;
		}
	}
	changeType(type,title){
		this.setState({
			type:type,
			content:true,
			title:title
		})
	}
	currentback(){
		this.setState({
			type:'',
			content:false
		})
	}
}

export default CSS