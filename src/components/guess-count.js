import React from 'react';

import './guess-count.css';

import {connect} from 'react-redux';

export function GuessCount(props) {
	return (
		<p id="guess-count">Guess # {props.count}</p>

		);
}

const mapStateToProps = state => ({
	count: state.count
});

export default connect(mapStateToProps)(GuessCount);