import React from 'react';

import GuessForm from './guess-form';

import {connect} from 'react-redux';

import './feedback.css';


export function FeedBack(props) {
	console.log(props);
	return (
	
		<section>
			<h2 id="feedback">{props.feedback}</h2>
			<GuessForm onGuess={props.onGuess} />
		</section>	

	);
}

const mapStateToProps = state => ({
	feedback: state.feedback
});

export default connect(mapStateToProps)(FeedBack);