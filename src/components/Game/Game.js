import React, { useState } from "react";
import WordForm from "../WordForm";
import GuessResults from "../GuessResults";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess, correctGuess } from "../../game-helpers";
import ResultBanner from "../ResultBanner/ResultBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);

  const results = guesses.map((guess) => checkGuess(guess.label, answer));
  const guessCount = guesses.length ?? 0;
  const isCorrectGuess = results.some((guess) => correctGuess(guess));

  return (
    <>
      <GuessResults guesses={guesses} results={results} />
      <WordForm guess={guess} setGuess={setGuess} setGuesses={setGuesses} />
      {isCorrectGuess || guessCount >= 6 ? (
        <ResultBanner
          isCorrectGuess={isCorrectGuess}
          guessCount={guessCount}
          answer={answer}
        />
      ) : null}
    </>
  );
}

export default Game;
