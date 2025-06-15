import React from "react";

function WordForm({ guess, setGuess, setGuesses }) {
  return (
    <>
      <form
        className="guess-input-wrapper"
        onSubmit={(event) => {
          event.preventDefault();
          console.log({ guess });
          const nextGuess = {
            id: crypto.randomUUID(),
            label: guess,
          };
          setGuesses((prevGuesses) => [...prevGuesses, nextGuess]);
          setGuess("");
        }}
      >
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="Please enter a 5 letter word"
          id="guess-input"
          type="text"
          value={guess}
          onChange={(event) => {
            setGuess(event.target.value.toUpperCase());
          }}
        ></input>
      </form>
    </>
  );
}

export default WordForm;
