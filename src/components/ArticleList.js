import React, {Component} from 'react'
import Article from './Article'
import collapse from '../decorators/collapse'
import PropTypes from 'prop-types'


function ArticleList(props) {
    const { articles, isOpen, toggleOpenId } = props
    const elements = articles.map(article => (
        <li key={article.id}>
            <Article
                article={article}
                isOpen={isOpen(article.id)}
                toggleOpen={toggleOpenId(article.id)}
            />
        </li>
    ))

    return <ul>{elements}</ul>
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    isOpen: PropTypes.func,
    toggleOpenId: PropTypes.func
}

export default collapse(ArticleList)
