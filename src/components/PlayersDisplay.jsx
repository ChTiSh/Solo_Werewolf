/**
 * ************************************
 *
 * @module  PlayerDisplay
 * @author
 * @date
 * @description presentation component that renders n Player components
 *
 * ************************************
 */

 import React from 'react';
 import Player from './Player.jsx';

 const PlayersDisplay = props => {

    // we need a loop (map?) to display all the markets 
    const {addPlayer, playerList, deletePlayer, totalPlayers, playerIdentity} = props;
  
    const players = [];
  
  
      for (let i = 0; i < playerList.length; i++) {
        players.push(
          <Player id={i}
            key={'player' + i}
            addPlayer={addPlayer}
            player={playerList[i]}
            deletePlayer={deletePlayer}
            totalPlayers={totalPlayers}
            playerIdentity = {playerIdentity}
            playerList = {playerList}
          />
        );
      }
    
  
    return(
      <div className="displayBox">
        
      {players}
  
      </div>
    );
  };
  
  export default PlayersDisplay;