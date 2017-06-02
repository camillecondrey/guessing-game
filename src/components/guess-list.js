import React from 'react';

import './guess-list.css';

import {connect} from 'react-redux';


export function GuessList(props) {
	const guesses = props.guesses.map((guess, index) => (
		<li key={index}>
			{guess}
		</li>	

	));

	return (
		<ul id="guess-list" className="guesses">{guesses}</ul>
	);
};

const mapStateToProps = state => ({
	guesses: state.guesses
});

export default connect(mapStateToProps)(GuessList);