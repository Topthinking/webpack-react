import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Prism from 'prismjs'
import StyleData from './centerData'
import './center.less'

class Center extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id="center">
					<div id="center1" className="center-list" ref="center1">
						<div className="item">1</div>
						<div className="content" ref="content1"><pre></pre></div>
					</div>
					<div id="center2" className="center-list" ref="center2">
						<div className="item">2</div>
						<div className="content" ref="content2"><pre></pre></div>
					</div>
					<div id="center3" className="center-list" ref="center3">
						<div className="item">3</div>
						<div className="content" ref="content3"><pre></pre></div>
					</div>
					<div id="center4" className="center-list" ref="center4">
						<div className="item">4</div>
						<div className="content" ref="content4"><pre></pre></div>
					</div>
				</div>
			)
	}
	componentDidMount(){
		const center = [
				this.refs.center1,
				this.refs.center2,
				this.refs.center3,
				this.refs.center4
			]
		const content = [
				this.refs.content1,
				this.refs.content2,
				this.refs.content3,
				this.refs.content4
			]

		center.map((item)=>{
			item.addEventListener("click",function(e){

				let content = item.getElementsByClassName('content')[0];

				content.style.right = '-1px';
				content.style.width = '101%';

				e.stopPropagation();
				e.preventDefault();
			});
		})


		content.map((item,index)=>{

			item.getElementsByTagName('pre')[0].innerHTML = Prism.highlight(StyleData[index], Prism.languages.css);


			item.addEventListener("click",function(e){

				item.style.right = '-100%';
				item.style.width = '0%';

				e.stopPropagation();
				e.preventDefault();
			});
		})
		
	}
}

export default Center