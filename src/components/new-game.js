import React from 'react';

import './new-game.css';


export default class NewGame extends React.Component {
	onNewGame(event) {
	        event.preventDefault();
	        if (this.props.onNewGame) {
	            this.props.onNewGame();
	        }
	    }

	render(){
		return (
				<a className="new" href="#" onClick={e => this.onNewGame(e)}>
	                Start New Game
	            </a>	
			);
		}
	};
