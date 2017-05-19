import React from 'react';

import Header from './header';

import GuessCount from './guess-count';
import GuessList from './guess-list';
import FeedBack from './feedback';

export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			guesses: [],
			feedback: 'I am thinking of a number between 1 and 100...',
			correctAnswer: Math.round(Math.random() * 100)

		};
	}

	newGame() {
		this.setState({
			guesses: [],
			feedback: 'I am thinking of a number between 1 and 100...',
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

		// const fire = <i class="em em-some-emoji"></i>

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
			feedback = 'You got it!';
		}

		this.setState({
			feedback,
			guesses: [...this.state.guesses, guess]
		});
	}

	render() {
		return (

			<div>
				<Header onNewGame={() => this.newGame()}/>
				<FeedBack feedback={this.state.feedback}
                    onGuess={(guess) => this.guess(guess)}/>
                <GuessCount count={this.state.guesses.length}/>
				<GuessList  guesses={this.state.guesses}/>
				
			</div>		
		);
	}
}


