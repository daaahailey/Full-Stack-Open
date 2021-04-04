import React, { useState } from "react";


const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
}

const Anecdote = ({title, selected, voted}) => {
  return (
    <>
      <h1>{title}</h1>
      <p>{selected}</p> 
      <p>has votes {voted}</p>
    </>
  );
}

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [voted, setVoted] = useState(new Array(anecdotes.length).fill(0));
  // console.log(voted);
  
  const handleNextAnecdotes = () => {
    let index = Math.floor(Math.random() * anecdotes.length); 
    while(index === selected) {
      index = Math.floor(Math.random() * anecdotes.length); 
    }
    // console.log(index, selected);
    setSelected(index);
  }

   const countVote = () => {
     const copy = [...voted];
     copy[selected] += 1;
     setVoted(copy);
    //  console.log(voted)
   };

  const mostVoted = Math.max(...voted);
  const mostVotedIndex = voted.indexOf(mostVoted);

  return (
    <div>
      <Anecdote
        title="Anecdote of the day"
        selected={anecdotes[selected]}
        voted={voted[selected]}
      />
      <Button handleClick={countVote} text="vote" />
      <Button handleClick={handleNextAnecdotes} text="next anecdote" />
      <Anecdote
        title="Anecdote with most votes"
        selected={anecdotes[mostVotedIndex]}
        voted={mostVoted}
      />
    </div>
  );
};

export default App;
