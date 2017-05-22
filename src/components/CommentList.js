import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

function CommentList(props) {
    const {isOpen, toggleOpen} = props
    const linkText = isOpen ? 'hide comments' : 'show comments'

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{linkText}</a>
            {getBody(props)}
        </div>
    )
}

function getBody(props) {
    const {article: { id, comments = [] }, isOpen} = props
    if (!isOpen) return null
    if (!comments.length) return <div><p>No comments yet</p><CommentForm articleId = {id}/></div>
    return (
        <div>
            <ul>
                {comments.map(id => <li key={id}><Comment id={id}/></li>)}
            </ul>
            <CommentForm articleId = {id} />
        </div>
    )
}

CommentList.propTypes = {
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    article: PropTypes.object
}

export default toggleOpen(CommentList)