import { NavLink } from 'react-router-dom'

import BlueprintNote from '../assets/notes/blueprint-note.png'
import LetterNote from '../assets/notes/letter-note.png'
import ConnectNote from '../assets/notes/connect-note.png'
import BlueprintNoteSolved from '../assets/notes/blueprint-note-solved.png'
import LetterNoteSolved from '../assets/notes/letter-note-solved.png'
import ConnectNoteSolved from '../assets/notes/connect-note-solved.png'

export function Home({ solved }) {
  return (
    <div className='evidence-board'>
      {solved.connect
        ? <img src={ConnectNoteSolved} className='link note' />
        : <NavLink to='connect' className='link'>
            <img src={ConnectNote} className='note' />
          </NavLink>
      }

      {solved.blueprint
        ? <img src={BlueprintNoteSolved} className='link note' />
        : <NavLink to='blueprint' className='link'>
            <img src={BlueprintNote} className='note' />
          </NavLink>
      }

      {solved.letter
        ? <img src={LetterNoteSolved} className='link note' />
        : <NavLink to='letter' className='link'>
            <img src={LetterNote} className='note' />
          </NavLink>
      }
    </div>
  )
}