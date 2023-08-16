import React, { useContext } from "react";
import { AppContext } from "../App";

export default function GameOver (){

    const {gameOver, correctWord, currAttempt} = useContext(AppContext);
    return (
        <div className="game-over">
            <h2>{ gameOver.guessedWord ? "You win" : "You fail"}</h2>
            <h2>Correct word: {correctWord}</h2>
            {gameOver.guessedWord && (<h2>You guessed in {currAttempt.attempt} attempts !</h2>)}
        </div>
    );
}