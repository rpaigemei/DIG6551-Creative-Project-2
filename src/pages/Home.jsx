import { NavLink } from "react-router-dom"
import EvidenceBoard from "../assets/images/bg/evidence.png"
import ConnectNote from "../assets/images/notes/connect.png"
import ConnectNoteSolved from "../assets/images/notes/connect-solved.png"
import BlueprintNote from "../assets/images/notes/blueprint.png"
import BlueprintNoteSolved from "../assets/images/notes/blueprint-solved.png"
import LetterNote from "../assets/images/notes/letter.png"
import LetterNoteSolved from "../assets/images/notes/letter-solved.png"

export function Home({ solved }) {
  return (
    <div className="evidence-board">
      <img src={EvidenceBoard} className="board" />
      
      <div className="nav-notes">
        {solved.connect
          ? <img src={ConnectNoteSolved} className="note" />
          : <NavLink to="connect">
              <img src={ConnectNote} className="note" />
            </NavLink>
        }

        {solved.blueprint
          ? <img src={BlueprintNoteSolved} className="note" />
          : <NavLink to="blueprint">
              <img src={BlueprintNote} className="note" />
            </NavLink>
        }

        {solved.letter
          ? <img src={LetterNoteSolved} className="note" />
          : <NavLink to="letter">
              <img src={LetterNote} className="note" />
            </NavLink>
        }
      </div>
    </div>
  )
}