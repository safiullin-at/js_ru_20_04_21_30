import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DateRange from './DateRange'
import SelectFilter from './Select'
import {connect} from 'react-redux'
import {
    filterArticleListById,
    filterArticleListByDateRange
} from '../../AC'

class Filters extends Component {
    static propTypes = {
        // props from redux store
        articles: PropTypes.array,
        filters: PropTypes.object.isRequired,
        // actions from redux
        filterArticleListById: PropTypes.func,
        filterArticleListByDateRange: PropTypes.func
    };

    render() {
        const {
            articles,
            filters,
            filterArticleListById,
            filterArticleListByDateRange
        } = this.props

        const {selection, dateRange} = filters

        return (
            <div>
                <SelectFilter
                    articles={articles}
                    selection={selection}
                    onFilterChange={filterArticleListById}
                />
                <DateRange
                    dateRange={dateRange}
                    onFilterChange={filterArticleListByDateRange}
                />
            </div>
        )
    }
}

const mapStateToProps = ({articles, filters}) => ({articles, filters})

export default connect(mapStateToProps, {
    filterArticleListById,
    filterArticleListByDateRange
})(Filters)
