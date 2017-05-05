import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

//redux流
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFiles from '../actions/userinfo'

//本地缓存配置
import { CITYNAME } from '../config/localStorekey'
import LocalStore from '../util/localStore'


// 路由配置
import Home from '../containers/Home'
import City from '../containers/City'
import Search from '../containers/Search'
import CSS from '../containers/CSS'
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
		const history = createBrowserHistory()
		return (
			<Router history={history}>
			{
				this.state.initDone
				?	<div>
						<Switch>
							<Route exact path="/" component={Home}/>
							<Route exact path="/city" component={City}/>
							<Route path="/search/:category" component={Search}/>
							<Route path="/css" component={CSS}/>
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