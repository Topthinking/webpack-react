import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import DvaContainer from './dva'

function render() {
	ReactDOM.render(		
		<DvaContainer>		
			<App />			
		</DvaContainer>		
  , document.getElementById('root'));
}
render()

if (module.hot) {
	module.hot.accept();	
}
      