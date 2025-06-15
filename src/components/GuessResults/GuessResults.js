import React from "react";
import { range } from "../../utils";
import * as constants from "../../constants";
import Guess from "../Guess";

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(constants.NUM_OF_GUESSES_ALLOWED).map((row) => {
        if (guesses[row] !== undefined) {
          return <Guess key={`guess-${row}`} guess={guesses[row]} />;
        } else {
          return (
            <p className="guess" key={`guess-${row}`}>
              {range(constants.WORD_LENGTH).map((cell) => (
                <span className="cell" key={`${row}-cell-${cell}`}></span>
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
