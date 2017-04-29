//HOC === Higher Order Component === decorator
import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class Collapsible extends ReactComponent {

    state = {
        openId: null
    }

    render() {
        return <OriginalComponent {...this.props} isOpen={this.isOpen} toggleOpenId={this.toggleOpenId} />
    }

    isOpen = id => this.state.openId === id

    toggleOpenId = openId => ev => {
        ev && ev.preventDefault && ev.preventDefault()
        if (openId === this.state.openId) openId = null
        this.setState({openId})
    }

}
