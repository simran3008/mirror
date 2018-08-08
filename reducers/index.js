import {
  combineReducers
}
from 'redux'

let initialState = {
  message: 'Hello'
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}

const mirrorReducers = combineReducers({
  weatherReducer
})

export default mirrorReducers
