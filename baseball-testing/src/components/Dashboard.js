import React, { useState } from 'react'
import Display from './Display'

export default function Dashboard() {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);

    const strikeCounter = () => {
        if(strike < 2){
            return setStrike(strike + 1);
        }
        else  return setStrike(0)       
    }

    const ballCounter = () => {
        if(ball < 3){
            return setBall(ball + 1);
        }
        else  return setBall(0)       
    }

    const foul = () => {
        if(strike < 2) {
            return setStrike(strike + 1);
        }
        else return
    }

    const hit = () => {
        setStrike(0);
        setBall(0);
    }

    console.log(strike)
    console.log(ball)
    return (
        <div>
            <button
                onClick={strikeCounter}
            >Strike</button>
            <button
                onClick={ballCounter}
            >Ball</button>
            <button
                onClick={foul}
            >Foul</button>
            <button
                onClick={hit}
            >Hit</button>
            
            <Display strike={strike} ball={ball} />
        </div>
        
            
        )
}
