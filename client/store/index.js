import { createStore, combineReducers, applyMiddleware } from 'redux'
import board from './board'
import player from './player'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'


const reducer = combineReducers(
    {
        board,
        player,
    }
)

const middleware = composeWithDevTools(applyMiddleware(
    createLogger({collapsed: true})
  ))

const store = createStore(reducer, middleware)

export default store
export * from './board'
export * from './player'
