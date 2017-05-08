import React,{Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import Prism from 'prismjs'
import StyleData from './animateData'
import './animate.less'

class Animate extends Component{
	constructor(props) {
	  super(props);
	  this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div id="animate">
					<div id="animate1" className="animate-list" ref="animate1">
						<div className="item">位移</div>
						<div className="content" ref="content1"><pre></pre></div>
					</div>
					<div id="animate2" className="animate-list" ref="animate2">
						<div className="animate-title">
							<div className="item item1">旋转1</div>
							<div className="item item2">旋转2</div>
							<div className="item-line"></div>
						</div>
						<div className="content" ref="content2"><pre></pre></div>
					</div>
					<div id="animate3" className="animate-list" ref="animate3">
						<div className="item">翻转</div>
						<div className="content" ref="content3"><pre></pre></div>
					</div>
				</div>
			)
	}

	componentDidMount(){
		const animate = [
				this.refs.animate1,
				this.refs.animate2,
				this.refs.animate3
			]
		const content = [
				this.refs.content1,
				this.refs.content2,
				this.refs.content3
			]

		animate.map((item)=>{
			item.addEventListener("click",function(e){

				let content = item.getElementsByClassName('content')[0];

				content.style.right = '0%';
				content.style.width = '100%';

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

export default Animate