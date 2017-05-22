import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'
import {connect} from 'react-redux'
import {addComment} from '../../AC'

class CommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired
    };

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                user: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.text}
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        console.log('---', this.state)
        this.props.addComment(
            this.props.articleId,
            this.state
        )
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type].length && this.state[type].length < 10 ? 'form-input__error' : ''

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > 20) return
        this.setState({
            [type]: value
        })
    }
}

export default connect(null, {addComment})(CommentForm)
