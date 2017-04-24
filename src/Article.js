import React, {Component} from 'react'
import CommentList from './CommentList'

export default class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const {article} = this.props
        const {isOpen} = this.state
        return (
            <section>
                <h2 onClick={this.toggleOpen}>
                    {article.title}
                </h2>
                {isOpen && this.getBody()}
            </section>
        )
    }

    getBody() {
        const {article} = this.props
        return (
            <div>
                {this.props.article.text}
                <CommentList comments={article.comments} />
            </div>
        )
    }

    toggleOpen = (ev) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}