import { NavLink } from "react-router-dom"
import { motion } from "motion/react"
import { containerVariants, lineVariants } from "../components/text-fade-in"
import ConnectNoteSolved from "../assets/images/notes/connect-solved.png"
import BlueprintNoteSolved from "../assets/images/notes/blueprint-solved.png"
import LetterNoteSolved from "../assets/images/notes/letter-solved.png"
import Note from "../assets/images/paper/ui.png"

export const ConnectPopup = () => {
  const lines = [
    "Property must be abandoned",
    "The space was setup carefully",
    "They had secret communication",
    "There is a hidden room here"
  ]

  return (
    <div className="ui">
      <img src={ConnectNoteSolved} className="title" />
      <img src={Note} className="note"/>

      <div className="text">
        <div>
          {lines.map((line, i) => (
            <div>{line}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const BlueprintPopup = () => {
  const lines = [
    "Rotating the mansion blueprint",
    "shows how the rooms and hallways",
    "connect. There seems to be a space",
    "here that shouldn't be…"
  ]

  return (
    <div className="ui">
      <img src={BlueprintNoteSolved} className="title" />
      <img src={Note} className="note"/>

      <div className="text">
        <div>
          {lines.map((line, i) => (
            <div>{line}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const LetterPopup = () => {
  const lines = [
    "The letter reveals it all… someone",
    "planned all of this. She was lured to",
    "the mansion, and there is a secret",
    "waiting upstairs in the library."
  ]

  return (
    <div className="ui">
      <img src={LetterNoteSolved} className="title" />
      <img src={Note} className="note"/>

      <div className="text">
        <div>
          {lines.map((line, i) => (
            <div>{line}</div>
          ))}
        </div>
      </div>
    </div>
  )
}