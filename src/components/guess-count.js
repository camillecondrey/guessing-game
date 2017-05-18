import React from 'react';

import './guess-count.css';


export default function guessCount(props) {
	return (
		<p id="guess-count">Guess # {props.count}</p>

		);
}