import React, {Component} from 'react'
import Comment from './Comment'

export default class CommentList extends Component {
    state = {
        isOpen: false
    }

    render() {
        const { isOpen } = this.state
        return (
            <div style={{marginTop: 15}}>
                <a href="#" onClick={this.toggleOpen}>{isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}</a>
                {isOpen && this.getComments()}
            </div>
        )
    }

    getComments = () => {
        const { comments } = this.props
        return (
            <div style={{marginTop: 15}}>
                {comments.map((comment) => <Comment key={comment.id} comment={comment} />)}
            </div>
        )
    }

    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
