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
    };
  };


 const mapDispatchToProps = (dispatch)=> ({
    //add a new player on submit
    addPlayer:(name)=> {
        dispatch(actions.addPlayerActionCreator(name));
    },
    addVotes:(playerId)=> {
        dispatch(actions.addVotesActionCreator(playerId))
    }
    // startGame:() => {

    // }
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
            />

            <StartVoting playerList={this.props.playerList}
            gameRounds={this.props.gameRounds}

            />
            <StartGame playerList={this.props.playerList}/>
            <PlayersDisplay playerList={this.props.playerList}
            newName={this.props.newName}
            playerId={this.props.playerId}
            addVotes={this.props.addVotes}
            totalVotes={this.props.totalVotes}
            totalPlayer={this.props.totalPlayer}

            />
 
        </div>
      )
   }
 }


 export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);