import React from "react";
import { range } from "../../utils";
import * as constants from "../../constants";

function Guess({ guess }) {
  return (
    <p key={guess.id} className="guess">
      {range(constants.WORD_LENGTH).map((i) => (
        <span key={`${guess.id}-${i}`} className="cell">
          {guess.label[i]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
