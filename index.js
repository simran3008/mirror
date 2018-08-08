import {
  createStore, compose
}
from 'redux';
import HelloWorld from './client'
const store = createStore(mirrorReducers);

ReactDOM.render( < HelloWorld / > , document.getElementById('root'));

export default store;
