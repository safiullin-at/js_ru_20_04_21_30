import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'
import Loader from './Loader'
import {filteredArticlesSelector} from '../selectors'
import {loadAllArticles} from '../AC'

class ArticleList extends Component {
    componentDidMount() {
        const {isLoading, isLoaded, loadAllArticles} = this.props
        if (!isLoading && !isLoaded) loadAllArticles()
    }

    render() {
        console.log('---', 'rendering ArticleList')
        const {articles, isLoading, toggleOpenItem, isItemOpened} = this.props
        if (isLoading) return <Loader />

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
        articles: filteredArticlesSelector(state),
        isLoading: state.articles.loading,
        isLoaded: state.articles.loaded
    }
}, {loadAllArticles})(accordion(ArticleList))