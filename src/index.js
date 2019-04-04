// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducers from './reducers'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Root from './Root'
import { BrowserRouter, Route } from 'react-router-dom'

// ReactDOM.render(
//     <Provider store={createStore(reducers, {})}>
//         <App />
//     </Provider>, document.querySelector('#root')
// )

ReactDOM.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App} />
        </BrowserRouter>
    </Root>,
    document.querySelector('#root')
)

// now the flow of data is:
    // <Provider + store /> ==>
        // <App /> ==>
            // CommentBox + CommentList



// see Root.js >>> commented out code here moved there