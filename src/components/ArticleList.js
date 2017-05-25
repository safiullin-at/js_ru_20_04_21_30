import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Loader from './Loader'
import {filteredArticlesSelector} from '../selectors'
import {loadAllArticles} from '../AC'
import {NavLink} from 'react-router-dom'

class ArticleList extends Component {
    componentDidMount() {
        const {isLoading, isLoaded, loadAllArticles} = this.props
        if (!isLoading && !isLoaded) loadAllArticles()
    }

    render() {
        const {articles, isLoading, match} = this.props
        if (isLoading) return <Loader />

        const elements = articles.map(article => <li key={article.id}>
            <NavLink to = {`${match.url}/${article.id}`} activeStyle = {{color: 'red'}}>{article.title}</NavLink>
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
    match: PropTypes.object.isRequired
}

export default connect((state) => {
    return {
        articles: filteredArticlesSelector(state),
        isLoading: state.articles.loading,
        isLoaded: state.articles.loaded
    }
}, {loadAllArticles})(ArticleList)