import React from "react";
import { range } from "../../utils";
import * as constants from "../../constants";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(constants.WORD_LENGTH).map((i) => (
        <span key={`${guess}-${i}`} className={`cell ${guess[i].status}`}>
          {guess[i].letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
