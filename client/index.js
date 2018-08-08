import React from 'react';
import ReactDOM from 'react-dom';
import mirrorReducers from '../reducers'
import helloWorld from '../actions'
import App from '../Components/App/App.jsx';
import {
  connect
}
from 'react-redux'

const HelloWorld = connect(
  mirrorReducers,
  helloWorld
)(App)

export default HelloWorld
