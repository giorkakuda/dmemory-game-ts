import { useRef, useState } from "react";
import { Card, cardProps } from "./card";
import { duplicateRegenerateSortArray } from "./duplicate";
import giortokenX from '../images/giortokenX.png'; 

export interface GridProps {
  cards: cardProps[];
}

export function Grid({ cards }: GridProps) {
  const [stateCards, setStateCards] = useState(() => {
    return duplicateRegenerateSortArray(cards);
  });
  const first = useRef<cardProps | null>(null);
  const second = useRef<cardProps | null>(null);
  const turnOver = useRef(false);
  const [matches, setMatches] = useState(0);
  const [moves, setMoves] = useState(0);

  const handleReset = () => {
    setStateCards(duplicateRegenerateSortArray(cards));
    first.current = null;
    second.current = null;
    turnOver.current = false;
    setMatches(0);
    setMoves(0);
  };

  const handleClick = (id: string) => {
    const newStateCards = stateCards.map((card) => {
      // If the card's ID has not been clicked, take no action
      if (card.id !== id) return card;
      // if the card is already flipped, take no action
      if (card.flipped) return card;

      // turn over the wrong cards
      if (turnOver.current && first.current && second.current) {
        // got it wrong
        first.current.flipped = false;
        second.current.flipped = false;
        first.current = null;
        second.current = null;
        turnOver.current = false;
      }

      // flip the card
      card.flipped = true;

      // Configure the first and second cards that were clicked
      if (first.current === null) {
        first.current = card;
      } else if (second.current === null) {
        second.current = card;
      }

      // Check if the two flipped cards are a correct match.
      if (first.current && second.current) {
        if (first.current.back === second.current.back) {
          // got it right
          first.current = null;
          second.current = null;
          setMatches((m) => m + 100);
          (window as any).totalMatches = matches + 100; // => object that you can get in the browser
        } else {
          turnOver.current = true;
        }
        setMoves((m) => m + 1);
      }

      return card;
    });
    setStateCards(newStateCards);
  };

  return (
    <>
      <div className="text">
        <h1>dMemory Game</h1>

        <p> Moves: {moves} </p>
        <p>Tokens: {matches}</p>
        <a href='https://sepolia.etherscan.io/address/0xeF923F5824396aaae535d310f832Ba247d804cFe' target='blank'><img src={giortokenX} alt="" className="token" /></a>
        <button className="restart" onClick={() => handleReset()}>Restart</button>
        
        
      </div>
      
      <div className="grid">
        {stateCards.map((data) => {
          return (
            <Card {...data} key={data.id} handleClick={handleClick} />
          );
        })}
      </div>
    </>
  );
}
