import React from "react";
import { range } from "../../utils";
import * as constants from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses, results }) {
  return (
    <div className="guess-results">
      {range(constants.NUM_OF_GUESSES_ALLOWED).map((row) => {
        if (guesses[row] !== undefined) {
          return (
            <Guess key={`guess-${guesses[row].id}`} guess={results[row]} />
          );
        } else {
          return (
            <p className="guess" key={`guess-${row}`}>
              {range(constants.WORD_LENGTH).map((i) => (
                <span className="cell" key={`${row}-cell-${i}`}></span>
              ))}
            </p>
          );
        }
      })}
    </div>
  );
}

export default GuessResults;

// NUM_OF_GUESSES_ALLOWED
