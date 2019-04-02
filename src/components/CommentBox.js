import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions' // 'saveComment' = one of these

class CommentBox extends React.Component {
    state = { comment: '' }
    
    handleChange = (event) => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault() // prevents page from re-loading
        this.setState({ comment: '' })

        this.props.saveComment(this.state.comment)
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

export default connect(null, actions)(CommentBox)