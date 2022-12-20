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
import React,{useState} from 'react';


//let disable = true;


const PlayerCreator = props => {
    const [disable, setDisable] = useState(true);
    function notEmpty(){
        
        if(document.getElementById('name').value){
            console.log(document.getElementById('name').value)
            setDisable(false);
        }
    }
    
    const enoughPlayer = ()=>{
        console.log('playList length', props.playerList.length);
        if(props.playerList.length >= 9){
           setDisable(true);
           document.getElementById('name').style.visibility = "hidden";
           document.getElementById('join').style.visibility = "hidden";
        } 
    }

    // after each click of join, a post request should be sent to the server 
    // to generate the session id/cookie to identify each player
    const handleClick = () => {
        props.addPlayer(document.getElementById('name').value);
        document.getElementById('name').value = '';
        setDisable(true)
        enoughPlayer();
        notEmpty();
    }
    return (
        <div className="gameNav">
            <div className="nameInput" display="block">
                <input id='name' onChange={notEmpty}/>
                <button id='join' onClick ={handleClick} disabled={disable? true : false}>Join</button>
            </div>

        </div>
    )
}

export default PlayerCreator;

//<button onClick ={() => props.addPlayer(document.getElementById('name').value)} disabled={disable}>Join</button>
