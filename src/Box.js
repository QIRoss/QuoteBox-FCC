import React, { useState } from 'react';

function Box() {
  const quotes = [
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Be yourself; everyone else is already taken.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth."
    ];
  const names = [
    "Marilyn Monroe",
    "Oscar Wilde",
    "Albert Einstein",
    "Frank Zappa",
    "Marcus Tullius Cicero",
    "Bernard M. Baruch",
    "William W. Purkey"
  ];
  const [state, setState] = useState(0);
  const randomize = () => {
    setState(Math.floor(Math.random() * (quotes.length)))
  }

  return (
    <div id="quote-box">
      <h2 id="text">{quotes[state]}</h2>
      <p id="author">{names[state]}</p>
      <div className="buttons">
        <button id="new-quote" onClick={randomize}>New quote</button>
        <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote" rel="noreferrer" alt="">
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

export default Box;
