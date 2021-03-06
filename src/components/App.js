import React from 'react'
import CommentBox from './CommentBox'
import CommentList from './CommentList'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
import * as actions from '../actions'

class App extends React.Component {
    renderButton() {
        if (this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
            )
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
            )
        }
    }
    
    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a Comment</Link>
                </li>
                <li>{this.renderButton()}</li>
            </ul>
        )
    }
    
    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox} />
                <Route path="/" exact component={CommentList} />
                    {/* adding 'exact' removes CommentList from "/posts" which matches "/" */}
            </div>
        )
    }
}

function mapStateToProps(state) {
	console.log("TCL: mapStateToProps -> state", state)
    return { auth: state.auth }
}

export default connect(mapStateToProps, actions)(App)