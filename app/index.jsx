import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'

const store = configureStore()

import App from './containers/app'

import './static/css/common.less'
import './static/css/font.less'

render(
	<Provider store={store}>
		<App />
	</Provider>
	,document.getElementById("root")
)