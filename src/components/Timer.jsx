/**
 * ************************************
 *
 * Timer - Optional Feature for this project scope
 * 
 * The timer to count down each player's voice time
 * 
 * Timer will start every time under following circumstances 
 * when it's new round
 * when player click next
 * when the timer reaches to 0
 * 
 *
 * ************************************
 */

 import React from 'react';

 const restartTimer = props => {
    return 60;
    
 }
 const Timer = props => (
    <div className="gameNav">
        <h4>Time Left: {restartTimer}</h4>
    </div>

 );

 export default Timer;