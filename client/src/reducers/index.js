/**
 * Created by ankur at 15/1/19 7:30 PM.
 */

import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from './errorReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
})
