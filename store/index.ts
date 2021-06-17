import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import authReducer from "./reducers/authReducer"
import notificationReducer from "./reducers/notificationReducer"
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({
  notification: notificationReducer,
  auth: authReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type RootState = ReturnType<typeof rootReducer>

export default store
