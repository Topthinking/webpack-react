import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import { AppContainer } from 'react-hot-loader'


//解决移动端300毫秒延迟
var FastClick = require('fastclick')
FastClick.attach(document.body)

const store = configureStore()

import App from './appContainer'

import './static/css/common.less'
import './static/css/font.less'

if (process.env.NODE_ENV != 'production') {
	
	render(
		<AppContainer>
			<Provider store={store}>
				<HashRouter basename="/">
					<App />
				</HashRouter>
			</Provider>
		</AppContainer>	
		, document.getElementById("root")
	)
	if (module.hot) { 
		module.hot.accept();
	}
} else {
	render(
		<Provider store={store}>
			<HashRouter basename="/">
				<App />
			</HashRouter>
		</Provider>
		, document.getElementById("root")
	)
}