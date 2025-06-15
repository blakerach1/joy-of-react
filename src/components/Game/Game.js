import React, { useState } from "react";
import WordForm from "../WordForm";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([
    { id: 123, label: "FIRST" },
    { id: 456, label: "GUESS" },
  ]);

  return (
    <>
      <GuessResults guesses={guesses} />
      <WordForm guess={guess} setGuess={setGuess} setGuesses={setGuesses} />
    </>
  );
}

export default Game;
