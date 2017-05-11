import React, {Component} from 'react'
import CommentList from './CommentList'
import PropTypes from 'prop-types'
import { deleteArticle } from '../AC/articles'

class Article extends Component {
    static propTypes = {
        article: PropTypes.shape({
            title: PropTypes.string.isRequired,
            text: PropTypes.string,
            comments: PropTypes.array
        }).isRequired,
        toggleOpen: PropTypes.func,
        isOpen: PropTypes.bool
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
                    {article.title} {' '}
                    <a href="#" onClick={this.handleDelete}>delete me</a>
                </h2>
                {this.getBody()}
            </section>
        )
    }

    handleDelete = ev => {
        ev && ev.preventDefault && ev.preventDefault()
        deleteArticle(this.props.article.id)
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

export default Article