import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput'
import './style.less'

class SearchHeader extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id="search-header" className="clear-fix">
					<span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
						<i className="icon-chevron-left"></i>
					</span>
					<SearchInput 
						value={this.props.keyword}
						enterHandle={this.enterHandle.bind(this)}
					/>
				</div>
			)
	}
	clickHandle(){
		window.history.back()
	}
	enterHandle(value){
		this.props.history.push('/search/all/'+encodeURIComponent(value));
	}
}

export default SearchHeader