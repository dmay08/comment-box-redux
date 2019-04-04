import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions' // 'saveComment', 'fetchComment' 
import requireAuth from './requireAuth' // allows us to now wrap 'CommentBox' in HOC (see 'export' line)

class CommentBox extends React.Component {
    state = { comment: '' }

    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault() // runs 1ST! > prevents page from re-loading
        this.setState({ comment: '' }) // setState = ASYNCHRONOUS!! runs AFTER 'saveComment'
            // runs 3RD!
        console.log(this.state.comment)

        this.props.saveComment(this.state.comment) // runs 2ND! 
    }
    
    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Enter a Comment</h4>
                    <textarea value={this.state.comment} onChange={this.handleChange}/>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
                <button onClick={this.props.fetchComments}>Fetch Comments</button>
            </div>
        )
    }
}

// moved 'mapStateToProps()' to Higher Order Component (HOC = 'requireAuth.js')

export default connect(null, actions)(requireAuth(CommentBox))
    // before adding 'requireAuth()' > CAN view '/post' regardless of 'isLoggedIn' (this.props.auth)