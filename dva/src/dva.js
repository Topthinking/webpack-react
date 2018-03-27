import React from 'react'
import dva from 'dva'
import models from './models'

const app = dva()

models.forEach(model => app.model(model))

export default class DvaContainer extends React.Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}