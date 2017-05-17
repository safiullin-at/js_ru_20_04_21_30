import React, {Component} from 'react'
import CommentList from '../CommentList'
import PropTypes from 'prop-types'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './style.css'
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC/index'

class Article extends Component {
/*
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }
*/
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen != this.props.isOpen
    }

    componentWillUpdate() {
        console.log('---', 'updating')
    }

    render() {
        const {article, toggleOpen} = this.props
        return (
            <section>
                <h2 onClick={toggleOpen}>
                    {article.title}
                    <a href = "#" onClick = {this.handleDelete}>delete me</a>
                </h2>
                <CSSTransitionGroup
                    transitionName = "article"
                    transitionEnterTimeout = {500}
                    transitionLeaveTimeout = {300}
                >
                    {this.getBody()}
                </CSSTransitionGroup>
            </section>
        )
    }

    handleDelete = ev => {
        ev.preventDefault()
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
    }

    getBody() {
        return this.props.isOpen && (
            <div>
                {this.props.article.text}
                <CommentList comments={this.props.article.comments}/>
            </div>
        )
    }
}

export default connect(null, { deleteArticle })(Article)