/**
 * ************************************
 *
 * GameContainer
 * 
 * Container to include playersdisplay, playercreater, start game, timer
 *
 * ************************************
 */

 import React, { Component } from 'react';
 import { connect } from 'react-redux';
 import * as actions from '../actions/actions';

 import PlayersDisplay from '../components/PlayersDisplay.jsx';
 import PlayerCreator from '../components/PlayerCreator.jsx';
 //import Timer from '../components/Timer.jsx';
 import StartGame from '../components/StartGame.jsx';
 import StartVoting from '../components/StartVoting.jsx';



 const mapStateToProps = state => {
    // provide pertinent state here
    console.log(state);
    return{
      playerList: state.game.playerList,
      totalPlayer: state.game.totalPlayer,
      gameRounds: state.game.gameRounds,
      totalVotes: state.game.totalVotes,
      playerIdentity: state.game.playerIdentity,
      gameStatus:state.game.gameStatus,
    };
  };


 const mapDispatchToProps = (dispatch)=> ({
    //add a new player on submit
    addPlayer:(name)=> {
      dispatch(actions.addPlayerActionCreator(name));
    },
    addVotes:(playerId)=> {
      dispatch(actions.addVotesActionCreator(playerId))
    },
    startGame:(gameStatus) => {
      dispatch(actions.startGameActionCreator(gameStatus))

    }
 });

 class GameContainer extends Component {
    constructor(props) {
        super(props);
      }
    

    render() {
      return(
        <div className='innerbox'>
          
            <StartGame gameStatus={this.props.gameStatus}
                    addVotes={this.props.addVotes}
                    totalVotes={this.props.totalVotes}
                    playerIdentity={this.props.playerIdentity}
                    playerList={this.props.playerList}
                    playerId={this.props.playerId}
                    startGame={this.props.startGame}
            />
            <PlayerCreator playerList={this.props.playerList}
                    newName={this.props.newName}
                    playerId={this.props.playerId}
                    addPlayer={this.props.addPlayer}
                    addVotes={this.props.addVotes}
                    totalVotes={this.props.totalVotes}
                    totalPlayer={this.props.totalPlayer}
                    playerIdentity={this.props.playerIdentity}
                    startGame={this.props.startGame}
            />
            

            <StartVoting playerList={this.props.playerList}
                          gameRounds={this.props.gameRounds}
                          totalVotes={this.props.totalVotes}

            />
            <PlayersDisplay playerList={this.props.playerList}
                            newName={this.props.newName}
                            playerId={this.props.playerId}
                            addVotes={this.props.addVotes}
                            totalVotes={this.props.totalVotes}
                            totalPlayer={this.props.totalPlayer}
                            playerIdentity={this.props.playerIdentity}

            />
 
        </div>
      )
   }
 }


 export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);