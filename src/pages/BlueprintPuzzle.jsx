import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { containerVariants, lineVariants } from '../components/text-fade-in'

import R1C1 from '../assets/blueprint/1-1.png'
import R1C2 from '../assets/blueprint/1-2.png'
import R1C3 from '../assets/blueprint/1-3.png'
import R1C4 from '../assets/blueprint/1-4.png'
import R1C5 from '../assets/blueprint/1-5.png'
import R1C6 from '../assets/blueprint/1-6.png'
import R2C1 from '../assets/blueprint/2-1.png'
import R2C2 from '../assets/blueprint/2-2.png'
import R2C3 from '../assets/blueprint/2-3.png'
import R2C4 from '../assets/blueprint/2-4.png'
import R2C5 from '../assets/blueprint/2-5.png'
import R2C6 from '../assets/blueprint/2-6.png'
import R3C1 from '../assets/blueprint/3-1.png'
import R3C2 from '../assets/blueprint/3-2.png'
import R3C3 from '../assets/blueprint/3-3.png'
import R3C4 from '../assets/blueprint/3-4.png'
import R3C5 from '../assets/blueprint/3-5.png'
import R3C6 from '../assets/blueprint/3-6.png'
import R4C1 from '../assets/blueprint/4-1.png'
import R4C2 from '../assets/blueprint/4-2.png'
import R4C3 from '../assets/blueprint/4-3.png'
import R4C4 from '../assets/blueprint/4-4.png'
import R4C5 from '../assets/blueprint/4-5.png'
import R4C6 from '../assets/blueprint/4-6.png'
import R5C1 from '../assets/blueprint/5-1.png'
import R5C2 from '../assets/blueprint/5-2.png'
import R5C3 from '../assets/blueprint/5-3.png'
import R5C4 from '../assets/blueprint/5-4.png'
import R5C5 from '../assets/blueprint/5-5.png'
import R5C6 from '../assets/blueprint/5-6.png'
import BlueprintNote from '../assets/notes/blueprint-note.png'
import PopupNote from '../assets/notes/popup-note.png'

const blueprintGrid = [
  R1C1, R1C2, R1C3, R1C4, R1C5, R1C6,
  R2C1, R2C2, R2C3, R2C4, R2C5, R2C6,
  R3C1, R3C2, R3C3, R3C4, R3C5, R3C6,
  R4C1, R4C2, R4C3, R4C4, R4C5, R4C6,
  R5C1, R5C2, R5C3, R5C4, R5C5, R5C6
]

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
    'Rotating the mansion blueprint shows',
    'how the rooms and hallways connect. The',
    'layout is starting to make sense...'
  ]

  return (
    <div className='puzzle'>
      <div className='ui'>
        <img src={BlueprintNote} className='title' />
        <img src={PopupNote} className='note'/>

        {!solved ?
          <div className='text'>
            Rotate and align the rooms on this blueprint to understand the mansion’s structure.
          </div>
          :
          <motion.div className='text'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div variants={containerVariants} initial='hidden' animate='visible'>
              {lines.map((line, i) => (
                <motion.div key={i} variants={lineVariants}>
                  {line}
                </motion.div>
              ))}
            </motion.div>

            <NavLink to='/' end className='back'> Back to evidence board -&gt; </NavLink>
          </motion.div>
        }
      </div>

      {/* blueprint rotation puzzle */}
      <div className='blueprint-grid'>
        {blueprintGrid.map((img, i) => (
          <img key={i} src={img} className='cell' onClick={() => !solved && handleClick(i)} style={{ transform: `rotate(${rotations[i]}deg)`}} />
        ))}
      </div>
    </div>
  )
}
