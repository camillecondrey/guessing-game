import React from 'react';

import newGame from './new-game';
import guessCount from './guess-count';
import guessList from './guess-list';
import feedback from './feedback';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'Make your guess!',
			correctAnswer: Math.round(Math.random() * 100)

		};
	}

	newGame() {
		this.setState({
			guesses: [],
			feedback: 'Make your guess!',
			correctAnswer: Math.round(Math.random() * 100)
		});
	}

	guess(guess) {
		guess = parseInt(guess, 10);
		if (isNaN(guess)) {
			this.setState({
				feedback: 'Please enter a valid number'
			});
			return;
		}
	
		const difference = Math.abs(guess - this.state.correctAnswer);

		let feedback;
		if (difference >= 50) {
			feedback = 'Brrrr that\'s cold';
		}
		else if (difference >= 30) {
			feedback = 'Pretty chilly...';
		}
		else if (difference >=10) {
			feedback = 'Gettin toasty!';
		}
		else if (difference >=5) {
			feedback = 'Feelin hot, hot, hot!';
		}
		else {
			feedback = 'Someone call the fire dept! You got it!';
		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, guess]
		});
	}

	render() {
		return (
			<div>
				<newGame onClick={() => this.newGame()}/>
				<feedback feedback={this.state.feedback}
					onGuess={(guess) => this.guess(guess)} />
				<guessCount count={this.state.guesses.length} />
				<guessList guesses={this.state.guesses} />
			</div>		
		);
	}
}