import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'

export default class ArticleList extends Component {
    state = {
        openArticleId: null
    }

    render() {
        const {articles} = this.props
        const elements = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id == this.state.openArticleId}
                     toggleOpen={this.toggleArticle(article.id)}
            />
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }

    toggleArticle = openArticleId => ev => {
        this.setState({openArticleId})
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}