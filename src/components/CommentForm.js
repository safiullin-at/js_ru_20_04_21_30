import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentForm extends Component {
    static propTypes = {}
    static defaultProps = {}

    state = {
        author: '',
        text: ''
    }

    render() {
        const { author, text } = this.state
        return (
            <div>
                <div><input placeholder="Автор" type="text" value={author} onChange={this._handleChangeInput('author')} maxLength="20" /></div>
                <div><textarea placeholder="Комментарий" type="text" value={text} onChange={this._handleChangeInput('text')} maxLength="20" /></div>
                <div><button type="submit">Отправить</button></div>
            </div>
        )
    }

    _handleChangeInput = field => (ev) =>{
        const { target } = ev
        this.setState({
            [field]: target.value
        })
    }
}

export default CommentForm
