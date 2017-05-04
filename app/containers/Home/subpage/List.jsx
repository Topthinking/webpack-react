import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { getListData } from '../../../fetch/home/home'
import HomeList from '../../../components/HomeList'
import LoadMore from '../../../components/LoadMore'

import './style.less'

class List extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	  this.state = {
	  	hasMore:false,
	  	data:[],
	  	isLoadingMore:false,
	  	page:0
	  }
	}
	render(){
		return (
				<div>
					<h2 className="home-list-title">猜你喜欢</h2>
					{
						this.state.data.length
						? <HomeList data={this.state.data}/>
						: <div>{/*加载中*/}</div>
					}
					{
						this.state.hasMore
						? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
						: ''
					}
				</div>
			)
	}
	componentDidMount(){
		const cityName = this.props.cityName
		const result = getListData(cityName,0)
		this.resultHandle(result)
	}

	loadMoreData(){
		//记录状态
		this.setState({
			isLoadingMore:true
		})
		
		const cityName = this.props.cityName
		const page = this.state.page
		const result = getListData(cityName,page)
		this.resultHandle(result)

		//增加page
		this.setState({
			page:page+1,
			isLoadingMore:false
		})
	}

	//处理数据
	resultHandle(result){
		result.then(res=>{
			return res.json()
		}).then(json=>{
			const data = json.data;
			const hasMore = json.hasMore;
			this.setState({
				hasMore:hasMore,
				data:this.state.data.concat(data)
			})

		}).catch(err=>{
			console.log(err.message);
		})
	}
}

export default List