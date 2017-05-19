import React from 'react';
import NewGame from './new-game';

import './header.css'

export default function Header(props) {
	return (
		<header>
			<NewGame onNewGame={props.onNewGame} />
			<h1>Are you <span id="red">Hot</span> or <span id="blue">Cold?</span></h1>
		</header>	
		);


};


