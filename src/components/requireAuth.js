// HOC = HIGHER ORDER COMPONENT
    // lower camelCase name = exports a FUNCTION

import React from 'react'
import { connect } from 'react-redux'

export default (ChildComponent) => { // (param) === 'commentBox' or 'commentList' (whatever we pass in)
    class ComposedComponent extends React.Component {

        componentDidMount() {
            this.shouldNavigateAway()
        }
    
        componentDidUpdate() {
            this.shouldNavigateAway()
        }
    
        shouldNavigateAway() {
            if (!this.props.auth) {
                this.props.history.push("/")
            }
        }
        
        render() {
            return <ChildComponent {...this.props} />
        }
    }
    
    const mapStateToProps = (state) => {
        // console.log("TCL: mapStateToProps -> state", state)
        return { auth: state.auth } // 'comments' = from /reducers/index.js (it names state obj)
    }
    
    return connect(mapStateToProps)(ComposedComponent)
}