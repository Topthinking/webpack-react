import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

//redux流
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFiles from '../actions/userinfo'

//本地缓存配置
import { CITYNAME } from '../config/localStorekey'
import LocalStore from '../util/localStore'


// 路由配置
import Home from '../containers/Home'
import NotFound from '../containers/404'


class RouterMap extends Component{
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
	render(){
		return (
			<Router>
			{
				this.state.initDone
				?	<div>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route component={NotFound}/>
						</Switch>
					</div>
				: 	<div>正在加载...</div>
			}
			</Router>
		)
	}
	componentDidMount(){
		let cityName = LocalStore.getItem(CITYNAME)
		if(cityName == null){
			cityName = '上海'
		}

		this.props.userInfoActions.update({
			cityName:cityName
		})
		
		this.setState({
			initDone:true
		})
	}
}

function mapStateToProps(state){
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
		userInfoActions:bindActionCreators(userInfoActionsFromOtherFiles,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(RouterMap)