import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "motion/react"
import { containerVariants, lineVariants } from "../components/text-fade-in"
import { blueprintGrid } from "../components/blueprint-grid"
import BlueprintNote from "../assets/images/notes/blueprint.png"
import PopupNote from "../assets/images/paper/ui.png"

function getRandomRotation() {
  return Math.floor(Math.random() * 4) * 90;
}

export function BlueprintPuzzle({ onSolved }) {
  const [rotations, setRotations] = useState(() => blueprintGrid.map(() => getRandomRotation()))
  

  const handleClick = (i) => {
    setRotations((prev) => {
      const newRotations = [...prev];
      newRotations[i] = (newRotations[i] + 90);
      return newRotations;
    })
  }

  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const isSolved = rotations.every(r => r % 360 === 0);

    if (isSolved && !solved) {
      setSolved(true);
      onSolved?.();
    }
  }, [rotations, solved, onSolved])

  const lines = [
    "Rotating the mansion blueprint",
    "shows how the rooms and hallways",
    "connect. There seems to be a space",
    "here that shouldn't be…"
  ]

  return (
    <div className="puzzle-page">
      <div className="ui">
        <img src={BlueprintNote} className="title" />
        <img src={PopupNote} className="note"/>

        {!solved
          ? <div className="text">
              Rotate and align the rooms on this blueprint to understand the mansion’s structure.
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

      {/* blueprint rotation puzzle */}
      <div className="blueprint-grid">
        {blueprintGrid.map((img, i) => (
          <img key={i} src={img} className="cell" onClick={() => !solved && handleClick(i)} style={{ transform: `rotate(${rotations[i]}deg)`}} />
        ))}
      </div>
    </div>
  )
}
