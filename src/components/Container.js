import React, {Component} from 'react';
import { articleStore } from '../stores'
import ArticleList from './ArticleList'

class Container extends Component {

    state = {
        articles: []
    }

    componentDidMount() {

        // async getting
        setTimeout(() => {
            this.setState({ articles: articleStore.getAll() })
        }, 1000)

        articleStore.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
        articleStore.removeChangeListener(this.handleChange)
    }

    handleChange = () => {
        this.setState({
            articles: articleStore.getAll()
        })
    }

    render() {
        return (
            <ArticleList articles={this.state.articles} />
        );
    }
}

export default Container
