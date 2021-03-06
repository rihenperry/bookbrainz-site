/*
 * Copyright (C) 2019 Prabal Singh
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

import PagerElement from './parts/pager';
import PropTypes from 'prop-types';
import React from 'react';
import RevisionsTable from './parts/revisions-table';


class RevisionsPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			results: this.props.results
		};

		// React does not autobind non-React class methods
		this.searchResultsCallback = this.searchResultsCallback.bind(this);
		this.paginationUrl = './revisions/revisions';
	}

	searchResultsCallback(newResults) {
		this.setState({results: newResults});
	}

	render() {
		return (
			<div id="pageWithPagination">
				<RevisionsTable
					results={this.state.results}
					showEntities={this.props.showEntities}
					showRevisionEditor={this.props.showRevisionEditor}
				/>
				<PagerElement
					from={this.props.from}
					nextEnabled={this.props.nextEnabled}
					paginationUrl={this.paginationUrl}
					results={this.state.results}
					searchResultsCallback={this.searchResultsCallback}
					size={this.props.size}
				/>
			</div>
		);
	}
}


RevisionsPage.displayName = 'RevisionsPage';
RevisionsPage.propTypes = {
	from: PropTypes.number,
	nextEnabled: PropTypes.bool.isRequired,
	results: PropTypes.array,
	showEntities: PropTypes.bool,
	showRevisionEditor: PropTypes.bool,
	size: PropTypes.number
};
RevisionsPage.defaultProps = {
	from: 0,
	results: [],
	showEntities: true,
	showRevisionEditor: true,
	size: 20
};

export default RevisionsPage;
