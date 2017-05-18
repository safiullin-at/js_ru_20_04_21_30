import React, {Component} from 'react'
import {findDOMNode} from 'react-dom'
import Article from './Article/index'
import PropTypes from 'prop-types'
import accordion from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    componentDidMount() {
        const ref = this.refs[this.props.articles[0].id]
        console.log('---', ref, findDOMNode(ref))
    }

    render() {
        const {articles, toggleOpenItem, isItemOpened} = this.props
        const elements = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={isItemOpened(article.id)}
                     toggleOpen={toggleOpenItem(article.id)}
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
    // from redux store
    articles: PropTypes.array,
    // from accordion decorator
    toggleOpenItem: PropTypes.func.isRequired,
    isItemOpened: PropTypes.func.isRequired
}

const mapStateToProps = ({articles, filters: {selection = [], dateRange: {from: dateFrom, to: dateTo}}}) => {
    articles = articles.map(article => ({...article, date: new Date(article.date)}))

    // filtering by id
    //с этим ты перемудрил, но в остальном все хорошо
    const idToArticleMapping = articles.reduce((acc, cur) => ({...acc, [cur.id]: cur}), {})
    let filteredArticles = selection.length ? selection.map(({value}) => idToArticleMapping[value]) : articles
    filteredArticles = filteredArticles.filter(article => article)

    // filtering by date
    dateFrom = dateFrom && new Date(dateFrom)
    dateTo = dateTo && new Date(dateTo)
    if (dateFrom && dateTo) filteredArticles = filteredArticles.filter(({date}) => (date >= dateFrom && date <= dateTo))
    else if (dateFrom && !dateTo) filteredArticles = filteredArticles.filter(({date}) => (date => dateFrom))
    else if (!dateFrom && dateTo) filteredArticles = filteredArticles.filter(({date}) => (date <= dateTo))

    return {articles: filteredArticles}
}

export default connect(mapStateToProps)(accordion(ArticleList))
