import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import Chart from './Chart'
import UserForm from './UserForm'
import Filters from './Filters/index'
import Counter from './Counter'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    state = {
        counter: 0
    }

    updateCounter = (ev) => {
        ev.preventDefault()
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <Counter />
                <UserForm />
                <Filters articles = {[]} />
                <a href = "#" onClick = {this.updateCounter}>update chart</a>
                <ArticleList />
                <Chart articles = {this.props.articles} key={this.state.counter}/>
            </div>
        )
    }
}

export default App