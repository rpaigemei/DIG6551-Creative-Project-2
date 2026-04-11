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
          {solved.connect
            ? <img src={ConnectNoteSolved} className="note solved" />
            : <NavLink to="connect">
                <img src={ConnectNote} className="note unsolved" />
              </NavLink>
          }

          {solved.blueprint
            ? <img src={BlueprintNoteSolved} className="note solved" />
            : <NavLink to="blueprint">
                <img src={BlueprintNote} className="note unsolved" />
              </NavLink>
          }

          {solved.letter
            ? <img src={LetterNoteSolved} className="note solved" />
            : <NavLink to="letter">
                <img src={LetterNote} className="note unsolved" />
              </NavLink>
          }
        </div>
      </div>
    </div>
  )
}