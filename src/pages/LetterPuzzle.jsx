import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "motion/react"
import { containerVariants, lineVariants } from "../components/text-fade-in"
import LetterNote from "../assets/images/notes/letter.png"
import PopupNote from "../assets/images/paper/ui.png"

export function LetterPuzzle({ onSolved }) {
  const [clues, setClues] = useState([
    {id: 0, clue: "Tennis score meaning nothing", answer: "love", solved: false},
    {id: 1, clue: "When the lion lyrically sleeps", answer: "tonight", solved: false},
    {id: 2, clue: "Comedy like How to Lose a Guy in 10 Days or 10 Things I Hate About You", answer: "romantic", solved: false},
    {id: 3, clue: "Haunted estate", answer: "mansion", solved: false},
    {id: 4, clue: "“What goes __ must come down”", answer: "up", solved: false},
    {id: 5, clue: "One of three that make a right", answer: "left", solved: false},
    {id: 6, clue: "Dewey's domain", answer: "library", solved: false},
    {id: 7, clue: "10/10", answer: "perfect", solved: false},
    {id: 8, clue: "Like a hyena at a comedy show", answer: "laughing", solved: false},
    {id: 9, clue: "Please → ____ ← and see", answer: "wait", solved: false},
  ]);
  const [guess, setGuess] = useState("");

  const handleChange = (event) => {
    setGuess(event.target.value);
  }

  useEffect(() => {
    const answer = clues.find(c => c.answer === guess.toLowerCase() && !c.solved);

    if (answer) {
      markSolved(answer);
    }
  }, [guess])

  const checkSolved = (id) => {
    const clue = clues.find(c => c.id === id);

    if (!clue.solved) {
      return <span className="clue">({clue.clue})</span>
    }
    
    return (
      <motion.span variants={containerVariants} initial="hidden" animate="visible">
        <motion.span key={clue.id} variants={lineVariants}>
          {clue.answer}
        </motion.span>
      </motion.span>
    )
  }

  const markSolved = (item) => {
    setClues(prev =>
      prev.map(clue =>
        clue.id === item.id ? ({ ...clue, solved: true }) : clue)
    )

    setGuess("");
  }

  const [solved, setSolved] = useState(false);
  
  useEffect(() => {
    const isSolved = clues.every(clue => clue.solved === true);

    if (isSolved && !solved) {
      setSolved(true);
      onSolved?.();
    }
  }, [clues, solved, onSolved])

  const lines = [
    "The letter reveals it all… someone",
    "planned all of this. She was lured to",
    "the mansion, and there is a secret",
    "waiting upstairs in the library."
  ]

  return (
    <div className="puzzle-page">
      <div className="ui">
        <img src={LetterNote} className="title" />
        <img src={PopupNote} className="note"/>

        {!solved
          ? <div className="text">
              Read the letter carefully and use the clues to fill in missing details and uncover the secret message.
            </div>
          : <motion.div className="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div variants={containerVariants} initial="hidden" animate="visible">
                {lines.map((line, i) => (
                  <motion.div key={i} variants={lineVariants}>
                    {line}
                  </motion.div>
                ))}
              </motion.div>

              <NavLink to="/" end className="back"> Back to evidence board -&gt; </NavLink>
            </motion.div>
        }
      </div>

      {/* connect strings puzzle */}
      <div className="puzzle">
        <div className="letter">
          <div className="paper">
            <div className="p">
              Hello my {checkSolved(0)},
            </div>
            <div className="p">
              I can’t stop thinking about {checkSolved(1)}... I can hardly wait. I’ve finally found a place that’s completely ours, a {checkSolved(2)} little spot where no one else will bother us. Just for the two of us, finally. When you get to the {checkSolved(3)}, go {checkSolved(4)}stairs, down the {checkSolved(5)} hallway, and through the {checkSolved(6)}. There’s a small room tucked away that most people would never notice. I found it by accident and kept thinking how {checkSolved(7)} it would be for us. I keep imagining us there, {checkSolved(8)}, talking, just having a world of our own.
            </div>
            <div>
              I’ll be {checkSolved(9)}ing for you.
            </div>
          </div>
        </div>

        <input className={`input ${solved && "disabled"}`} type="text" value={guess} onChange={handleChange} disabled={solved ? true : false} placeholder="Type any answer..." />
      </div>
    </div>
  )
}
