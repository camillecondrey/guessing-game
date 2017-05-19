import React from 'react';

import GuessForm from './guess-form';

import './feedback.css';


export default function FeedBack(props) {
	console.log(props);
	return (
	
		<section>
			<h2 id="feedback">{props.feedback}</h2>
			<GuessForm onGuess={props.onGuess} />
		</section>	

	);
}
