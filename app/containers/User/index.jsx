import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as appActions from '../../actions/app'

import Face from './subpage/face'
import ActionList from './subpage/action'
import './style.less'
import './subpage/style.less'
class User extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id="user-info">
					<Face />
					<div style={{height: '15px'}}></div>
					<ActionList />
				</div>
			)
	}
	componentDidMount(){
		this.props.appActionList.menu({
			location:4
		})
	}
}

function mapStateToProps(state){
	return {
	}
}

function mapDispatchToProps(dispatch){
	return {
		appActionList:bindActionCreators(appActions,dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User)