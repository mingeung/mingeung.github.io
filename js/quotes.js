const quotes = [
  {
    quote:
      "Quand il me Prend dans Ses bras il me Parle tout Bas je vois La vie en rose",
    author: "mingeung",
  },
  {
    quote: "Joie de vivre",
    author: "mingeung",
  },
  {
    quote: "Je serai poete et toi Poesie",
    author: "mingeung",
  },
  {
    quote: "Le coeur a ses raisons",
    author: "mingeung",
  },
  {
    quote: "Tout est possible",
    author: "mingeung",
  },
  {
    quote: "L'amour est tout ce qu'il faut",
    author: "mingeung",
  },
  {
    quote:
      "Tu es mon soleil, mon seul rayon de soleil, tu me rends heureux, quand le ciel est gris",
    author: "mingeung",
  },
  {
    quote: "non, je ne regrette rien",
    author: "mingeung",
  },
  {
    quote: "Tu n'est jamais trop tard pour etre ce que tu veux etre",
    author: "mingeung",
  },
  {
    quote: "Je m'en fous",
    author: "mingeung",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

//rount() : 반올림, ceil() 올림, floor() 내림

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
