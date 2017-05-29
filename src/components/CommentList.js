import React, {Component} from 'react'
import Comment from './Comment'
import CommentForm from './CommentForm/index'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'
import {loadComments} from '../AC'
import {commentsCollectionGetter} from '../selectors'
import {connect} from 'react-redux'

class CommentList extends Component {

    static propTypes = {
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        article: PropTypes.object,
        // from actions
        loadComments: PropTypes.func.isRequired,
        commentsCollection: PropTypes.object
    }

    componentWillReceiveProps({isOpen, article, commentsCollection: {loading, loaded}}) {
        if (isOpen && !this.props.isOpen && !loading && !loaded) {
            this.props.loadComments(article.id)
        }
    }

    render() {
        const {isOpen, toggleOpen} = this.props
        const linkText = isOpen ? 'hide comments' : 'show comments'

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{linkText}</a>
                {this._getBody()}
            </div>
        )
    }

    _getBody = () => {
        const {article: { id: articleId, comments = [] }, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <div><p>No comments yet</p><CommentForm articleId = {articleId}/></div>
        return (
            <div>
                <ul>
                    {comments.map(id => <li key={id}><Comment id={id} articleId={articleId}/></li>)}
                </ul>
                <CommentForm articleId = {articleId} />
            </div>
        )
    }
}

const mapStateToProps = (state, {article: {id: articleId}}) => ({
    commentsCollection: commentsCollectionGetter(state, articleId)
})

export default toggleOpen(connect(mapStateToProps, {loadComments})(CommentList))
