import React from 'react';

import './guess-list.css';

export default function guessList(props) {
	const guesses = props.guesses.map((guess, index) => (
		<li key={index}>
			{guess}
		</li>	

	));

	return (
		<ul id="guess-list" className="guesses">{guesses}</ul>
	);
};