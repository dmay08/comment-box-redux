import React from 'react'
import { connect } from 'react-redux'


class CommentList extends React.Component {
    
    renderComments() {
        return this.props.comments.map(comment => {
            return <li key={comment}>{comment}</li>
        })
    }
    
    render() {
        return (
            <div>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
	console.log("TCL: mapStateToProps -> state", state)
    return { comments: state.comments } // 'comments' = from /reducers/index.js (it names state obj)
}

export default connect(mapStateToProps)(CommentList)