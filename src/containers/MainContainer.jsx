/**
 * This will include the following functions :
 *  Game Prompts
 *  Game Status
 *  Game Rounds
 *  
 
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import GameContainer from './GameContainer.jsx';


 const mapStateToProps = state => {
    //mapping state
    return {
        gameStatus: state.game.gameStatus,
        gameRounds: state.game.rounds,
        playerList: state.game.playerList,
        totalWolves: state.game.totalWolves,
        totalPlayers: state.game.totalPlayers,
        totalHumans: state.game.totalHumans,
        gameId: state.game.gameId,
        totalVotes: state.game.totalVotes,
        playerIdentity: state.game.playerIdentity,
        voteStatus: state.game.voteStatus,
        
    }
 }

 /**
  * votes will be saved in session storage until final, then it will be send
  * to the database
  * database will only record final results of player
  */
 // Game prompts depends on the rounds and game status
 // Wolves, please vote for {the player} you want to kill tonight
 // Seer, please select {the player} you want to check tonight
 // doctor, {this player} got killed tonight, choose to save?
 // 
 // hunter choose to bring {this player} along

 class MainContainer extends Component {
    constructor(props){
        super(props);
    }

    

    //  A Guide on How to Play
    render(){
        return(
            <div className='container'>
                <div className='outerBox'>
                    <h1>Werewolf Game</h1>
                    
                    <GameContainer />
                </div>
            </div>
        );
    }
 }


 //exporting the mainContainer with props/state
 export default connect(mapStateToProps, null)(MainContainer);