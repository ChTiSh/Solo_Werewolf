/**
 * ************************************
 *
 * @module  PlayerCreator
 * @author
 * @date
 * @description presentation component that takes user input for new player creation
 *
 * ************************************
 * 
 *  how do we create the circuit between the store and an input field?
 *  how do we update the store from a presentation component?
 * 
 *  market data: key: Name, values: identity, life, skill
 * 
 */
import React from 'react';


const PlayerCreator = props => (
    <div className="styles.gameNav">
        <div className="nameInput">
            <input id='name'></input>
            <button onClick ={() => props.addPlayer(document.getElementById('name').value)}>Join</button>
        </div>

    </div>
);

export default PlayerCreator;