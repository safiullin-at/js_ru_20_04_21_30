import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import {filteredArticlesSelector} from '../selectors'

class ArticleList extends Component {
    componentDidMount() {
        const ref = this.refs[this.props.articles[0].id]
        console.log('---', ref, findDOMNode(ref))
    }

    render() {
        console.log('---', 'rendering ArticleList')
        const {articles, toggleOpenItem, isItemOpened} = this.props
        const elements = articles.map(article => <li key={article.id}>
            <Article article = {article}
                     isOpen = {isItemOpened(article.id)}
                     toggleOpen = {toggleOpenItem(article.id)}
                     ref = {article.id}
            />
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array,
    //from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

export default connect((state) => {
    return {
        articles: filteredArticlesSelector(state)
    }
})(accordion(ArticleList))