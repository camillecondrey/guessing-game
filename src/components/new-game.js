import React from 'react';

import './new-game.css';

import {newGame} from '../actions';

import {connect} from 'react-redux';


export class NewGame extends React.Component {
	constructor(props) {
	super(props)
	this.onNewGame = this.onNewGame.bind(this)
	}



	onNewGame(event) {
		console.log("test");
	        event.preventDefault();
	        this.props.dispatch(newGame());
	        
	    }

	render(){
		return (
				<a className="new" href="#" onClick={e => this.onNewGame(e)}>
	                Start New Game
	            </a>	
			);
		}
	};

export default connect()(NewGame);