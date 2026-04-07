import { NavLink } from 'react-router-dom'

import BlueprintNote from '../assets/blueprint-note.png'
import LetterNote from '../assets/letter-note.png'
import ConnectNote from '../assets/connect-note.png'

export function Home() {
  return (
    <div className='evidence-board'>
      <NavLink to='connect' className='link'>
        <img src={ConnectNote} className='note' />
      </NavLink>
      <NavLink to='blueprint' className='link'>
        <img src={BlueprintNote} className='note' />
      </NavLink>
      <NavLink to='letter' className='link'>
        <img src={LetterNote} className='note' />
      </NavLink>
    </div>
  )
}