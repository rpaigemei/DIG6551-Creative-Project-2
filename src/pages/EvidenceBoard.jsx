import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Evidence from "../assets/images/bg/evidence.png"
import ConnectNote from "../assets/images/notes/connect.png"
import ConnectNoteSolved from "../assets/images/notes/connect-solved.png"
import BlueprintNote from "../assets/images/notes/blueprint.png"
import BlueprintNoteSolved from "../assets/images/notes/blueprint-solved.png"
import LetterNote from "../assets/images/notes/letter.png"
import LetterNoteSolved from "../assets/images/notes/letter-solved.png"

// Click each question to examine the clues.

export function EvidenceBoard({ solved }) {
  const [allSolved, setAllSolved] = useState(false);
  const [instructions, setInstructions] = useState("Click each question to examine the clues.");

  useEffect(() => {
    if (solved.connect && solved.blueprint && solved.letter) {
      setInstructions("All questions answered. Click to close the case.")
      setAllSolved(true);
    }
  }, [solved])
  
  return (
    <div className="evidence-board">
      <img src={Evidence} className="board" />

      <div className="board-notes">
        <NavLink to="/case-closed" onClick={(e) => !allSolved && e.preventDefault()} className={`instructions ${allSolved && "allSolved"}`}>
          {instructions}
        </NavLink>
        <div className="nav">
          <NavLink to="connect" onClick={(e) => solved.connect && e.preventDefault()} className={`note ${solved.connect ? "solved" : "unsolved"}`}>
            <img src={solved.connect ? ConnectNoteSolved : ConnectNote} className="note unsolved" />
          </NavLink>

          <NavLink to="blueprint" onClick={(e) => solved.blueprint && e.preventDefault()} className={`note ${solved.blueprint ? "solved" : "unsolved"}`}>
            <img src={solved.blueprint ? BlueprintNoteSolved : BlueprintNote} className="note unsolved" />
          </NavLink>
          
          <NavLink to="letter" onClick={(e) => solved.letter && e.preventDefault()} className={`note ${solved.letter ? "solved" : "unsolved"}`}>
            <img src={solved.letter ? LetterNoteSolved : LetterNote} className="note unsolved" />
          </NavLink>
        </div>
      </div>
    </div>
  )
}