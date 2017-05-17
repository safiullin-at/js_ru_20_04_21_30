import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array,
        selection: PropTypes.array,
        onFilterChange: PropTypes.func
    };

    static defaultProps = {
        onFilterChange: () => {}
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <Select options = {options} value = {this.props.selection}
                    onChange = {this.props.onFilterChange}
                    multi = {true}
            />
        )
    }
}

export default SelectFilter