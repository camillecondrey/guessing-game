import {MAKE_GUESS, NEW_GAME} from '../actions';

const initialState = {
	guesses: [],
	feedback: 'I am thinking of a number between 1 and 100...',
	correctAnswer: Math.round(Math.random() * 100)
};

export default (state, action) => {
	state = state || initialState;
	if (action.type === NEW_GAME) {
		state = Object.assign({}, initialState, {
			correctAnswer: action.correctAnswer
		
		});
		return state;
	}

	else if (action.type === MAKE_GUESS) {
		const guess = parseInt(action.guess, 10);
		if (isNaN(guess)) {
			state = Object.assign({}, state, {
				feedback: 'Please enter a valid number'
			});
			return state;
		}
		const difference = Math.abs(guess - state.correctAnswer);

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

		state = Object.assign({}, state, {
			feedback,
			guesses: state.guesses.concat(action.guess)
		});
		return state;
	}
	return state;
};