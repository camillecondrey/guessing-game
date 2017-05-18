import React from 'react';

import guessForm from './guess-form';

import './feedback.css';


export default function feedback(props) {
	return (
		<section>
			<h2 id="feedback">{props.feedback}</h2>
			<guessForm onGuess={props.onGuess} />
		</section>	

	);
}
