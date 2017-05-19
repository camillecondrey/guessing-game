import React from 'react';

import './guess-count.css';


export default function GuessCount(props) {
	return (
		<p id="guess-count">Guess # {props.count}</p>

		);
}