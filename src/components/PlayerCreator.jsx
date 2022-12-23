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
import React,{useState, useEffect} from 'react';


//let disable = true;


const PlayerCreator = props => {
    const [disable, setDisable] = useState(true);
    //const [playerId,setplayerId ] = useState(0);
    
    
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
    
    // function setCookie(cName, cValue, expD) {
    //         let date = new Date();
    //         date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
    //         document.cookie = cName + "=" + cValue + "; ";
    // }
    // Apply setCookie
    
    const createPlayer =() =>{
        /***
         *  "player_id" smallint NOT NULL PRIMARY KEY,
            "name" varchar NOT NULL,
            "identity" varchar NOT NULL,
            "cookie_id" varchar NOT NULL,
            "life_status" varchar NOT NULL,
            "game_id" bigint NOT NULL
         */
        
        const body = {
            player_id: props.playerId,
            name: document.getElementById('name').value, 
            cookie_id: 'testingwithname',
            life_status: "live",
            game_id: props.gameId,
        }
        //fetch post cookie data into database
       
        fetch('http://localhost:3000/api/player', {
            method: 'POST',
            //mode:'no-cors',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body),
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch(err => console.log('Addplayer fetch /: ERROR: ', err));
      
    }
    
    // after each click of join, a post request should be sent to the server 
    // to generate the session id/cookie to identify each player
    const handleClick = (e) => {
        e.preventDefault();
        props.addPlayer(document.getElementById('name').value);
        createPlayer();
        document.getElementById('name').value = '';
        setDisable(true)
        enoughPlayer();
        notEmpty();
    
    }
    return (
        <div className="playerCreator">
            <div className="nameInput" display="block">
                <input id='name' placeholder="name" onChange={notEmpty}/>
                <button id='join' name={props.playerId} onClick ={handleClick} disabled={disable? true : false}>Join</button>
            </div>

        </div>
    )
}

export default PlayerCreator;

//<button onClick ={() => props.addPlayer(document.getElementById('name').value)} disabled={disable}>Join</button>
