import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'

class Search extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const params = this.props.match.params;		
		return (
				<div>
					<SearchHeader keyword={params.keyword} history={this.props.history}/>
					<SearchList keyword={params.keyword} category={params.category}/>
				</div>
			)
	}
	componentDidMount(){
		
	}
}

function mapStateToProps(state){
	return {
		userinfo:state.userinfo
	}
}

function mapDispatchToProps(dispatch){
	return {
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Search)