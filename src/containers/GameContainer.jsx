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
      voteStatus: state.game.voteStatus,
      gameId:state.game.gameId,
      playerId:state.game.playerId,
      lastPlayerAttacked: state.game.lastPlayerAttacked,

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
    startVoting:(voteStatus)=> {
      dispatch(actions.startVotingActionCreator(voteStatus));
    },
    changeStatus:(gameStatus)=>{
      dispatch(actions.changeStatusActionCreator(gameStatus));
    },
    attackedPlayer:(playerId)=>{
      dispatch(actions.attackedPlayerActionCreator(playerId));
    }
 });

 class GameContainer extends Component {
    constructor(props) {
      super(props);
    }
    

    render() {
      return(
        <div className='innerbox'>
            <PlayerCreator playerList={this.props.playerList}
                    newName={this.props.newName}
                    playerId={this.props.playerId}
                    addPlayer={this.props.addPlayer}
                    addVotes={this.props.addVotes}
                    totalVotes={this.props.totalVotes}
                    totalPlayer={this.props.totalPlayer}
                    playerIdentity={this.props.playerIdentity}
                    changeStatus={this.props.changeStatus}
                    voteStatus={this.props.voteStatus}
                    startVoting={this.props.startVoting}
                    gameId={this.props.gameId}
                    attackedPlayer={this.props.attackedPlayer}
                    lastPlayerAttacked={this.props.lastPlayerAttacked}
            />

            <StartGame gameStatus={this.props.gameStatus}
                    addVotes={this.props.addVotes}
                    totalVotes={this.props.totalVotes}
                    playerIdentity={this.props.playerIdentity}
                    playerList={this.props.playerList}
                    playerId={this.props.playerId}
                    changeStatus={this.props.changeStatus}
                    voteStatus={this.props.voteStatus}
                    startVoting={this.props.startVoting}
                    attackedPlayer={this.props.attackedPlayer}
                    lastPlayerAttacked={this.props.lastPlayerAttacked}
            />

            <StartVoting playerList={this.props.playerList}
                          gameRounds={this.props.gameRounds}
                          totalVotes={this.props.totalVotes}
                          gameStatus={this.props.gameStatus}
                          addVotes={this.props.addVotes}
                          voteStatus={this.props.voteStatus}
                          playerId={this.props.playerId}
                          startVoting={this.props.startVoting}
                          changeStatus={this.props.changeStatus}
                          attackedPlayer={this.props.attackedPlayer}
                          lastPlayerAttacked={this.props.lastPlayerAttacked}
            />
            <PlayersDisplay playerList={this.props.playerList}
                            newName={this.props.newName}
                            playerId={this.props.playerId}
                            addVotes={this.props.addVotes}
                            totalVotes={this.props.totalVotes}
                            totalPlayer={this.props.totalPlayer}
                            playerIdentity={this.props.playerIdentity}
                            gameStatus={this.props.gameStatus}
                            voteStatus={this.props.voteStatus}
                            startVoting={this.props.startVoting}
                            gameId={this.props.gameId}
                            gameRounds={this.props.gameRounds}
                            changeStatus={this.props.changeStatus}
                            attackedPlayer={this.props.attackedPlayer}
                            lastPlayerAttacked={this.props.lastPlayerAttacked}

            />
 
        </div>
      )
   }
 }


 export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);