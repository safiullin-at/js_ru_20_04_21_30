import React, { Component } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const linkText = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {isOpen, comments} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>
        return (
            <ul>
                {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)