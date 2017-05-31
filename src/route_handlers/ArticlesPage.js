import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from '../components/ArticleList'
import Article from '../components/Article'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {
        //from react-router
        match: PropTypes.object.isRequired
    };

    static contextTypes = {
        user: PropTypes.string
    }

    render() {
        const {match} = this.props
        return (
            <div>
                <h2>USERNAME: {this.context.user}</h2>
                <ArticleList match = {match} />
                <Route path = {`${match.url}/:id`} render = {this.getArticle}/>
            </div>
        )
    }

    getArticle = ({ match }) => {
        return <Article id = {match.params.id} key = {match.params.id} isOpen />
    }
}

export default ArticlesPage