// this component allows us to move Provider logic OUT of index.js >> into here 
import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import reduxPromise from 'redux-promise'

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers, 
        initialState, 
        applyMiddleware(reduxPromise)
    )

    return (
        <Provider store={store}> {/* moved 'createStore()' out of here & above into own variable */}
            {children}
        </Provider>
    )
}
// 'children' = (see index.js)
    // <Root>
    //     <App />
    // </Root>