import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import HomeAd from '../../../components/HomeAd'
import { getAdData } from '../../../fetch/home/home'

class Ad extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	data:[]
	  }
	}
	render(){
		return (
				<div>
					{
						this.state.data.length
						? <HomeAd data={this.state.data}/>
						: <div>加载中...</div>
					}
				</div>
			)
	}
	componentDidMount(){
		const result = getAdData();
	}
}

export default Ad