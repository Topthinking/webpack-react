import React,{Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'

const store = configureStore()

import RouterMap from './router/routerMap'

import './static/css/common.less'
import './static/css/font.less'

render(
		<Provider store={store}>
			<RouterMap />
		</Provider>
		,document.getElementById("root")
	)