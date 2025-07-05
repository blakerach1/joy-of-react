import React, { useState, useEffect } from "react";

function ResultBanner({ isCorrectGuess, guessCount, answer }) {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBanner(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showBanner) {
    return null;
  }

  return (
    <>
      {isCorrectGuess ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessCount} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}
export default ResultBanner;
