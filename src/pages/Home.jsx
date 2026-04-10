import { NavLink } from "react-router-dom"
import ConnectNote from "../assets/images/notes/connect.png"
import ConnectNoteSolved from "../assets/images/notes/connect-solved.png"
import BlueprintNote from "../assets/images/notes/blueprint.png"
import BlueprintNoteSolved from "../assets/images/notes/blueprint-solved.png"
import LetterNote from "../assets/images/notes/letter.png"
import LetterNoteSolved from "../assets/images/notes/letter-solved.png"

export function Home({ solved }) {
  return (
    <div className="evidence-board">
      {solved.connect
        ? <img src={ConnectNoteSolved} className="link note" />
        : <NavLink to="connect" className="link">
            <img src={ConnectNote} className="note" />
          </NavLink>
      }

      {solved.blueprint
        ? <img src={BlueprintNoteSolved} className="link note" />
        : <NavLink to="blueprint" className="link">
            <img src={BlueprintNote} className="note" />
          </NavLink>
      }

      {solved.letter
        ? <img src={LetterNoteSolved} className="link note" />
        : <NavLink to="letter" className="link">
            <img src={LetterNote} className="note" />
          </NavLink>
      }
    </div>
  )
}