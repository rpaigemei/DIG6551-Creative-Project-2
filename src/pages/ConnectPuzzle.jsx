import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'motion/react'
import { containerVariants, lineVariants } from '../components/text-fade-in'
import ConnectNote from '../assets/notes/connect-note.png'
import PopupNote from '../assets/notes/popup-note.png'


const lines = [
  'These pieces all fit together now. Her',
  'belongings, pleces she went, the people she',
  'met, and strange signs reveal her path.'
]

/*
  categories:
    1 = abandoned
    2 = set up space
    3 = communication
    4 = hidden room
*/
const clues = [
  {id: 1, note: "Peeling paint", category: 1, selected: false, connected: false},
  {id: 2, note: "Cobwebs in every corner", category: 1, selected: false, connected: false},
  {id: 3, note: "Broken locks", category: 1, selected: false, connected: false},
  {id: 4, note: "Overgrown lawn", category: 1, selected: false, connected: false},

  {id: 5, note: "Light left on in the hallway", category: 2, selected: false, connected: false},
  {id: 6, note: "Path to the room cleared", category: 2, selected: false, connected: false},
  {id: 7, note: "Tools left nearby", category: 2, selected: false, connected: false},
  {id: 8, note: "Blanket folded neatly", category: 2, selected: false, connected: false},

  {id: 9, note: "Calls to unknown number", category: 3, selected: false, connected: false},
  {id: 10, note: "Handwritten envelope", category: 3, selected: false, connected: false},
  {id: 11, note: "Incoming text: 'Can't wait.'", category: 3, selected: false, connected: false},
  {id: 12, note: "Location turned off", category: 3, selected: false, connected: false},

  {id: 13, note: "Narrow hallway upstairs", category: 4, selected: false, connected: false},
  {id: 14, note: "Library door ajar", category: 4, selected: false, connected: false},
  {id: 15, note: "Hidden latch under bookshelf", category: 4, selected: false, connected: false},
  {id: 16, note: "Layout differs from blueprint", category: 4, selected: false, connected: false},
];

export function ConnectPuzzle({ onSolved }) {
  const [shuffledClues, setShuffledClues] = useState(() => 
    clues
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  );
  
  const [selectedClues, setSelectedClues] = useState([]);

  const handleClick = (item) => {
    if (!item.selected && selectedClues.length === 4) {
      alert("you can only select 4 items");
      return;
    }

    setShuffledClues(prev =>
      prev.map(clue =>
        clue.id === item.id ? {...clue, selected: !clue.selected} : clue
      )
    );

    if (!item.selected) {
      setSelectedClues([...selectedClues, item]);
    }
    else {
      setSelectedClues(selectedClues.filter(i => i.id !== item.id));
    }
  }

  const handleClear = () => {
    setShuffledClues(prev =>
      prev.map(clue => ({ ...clue, selected: false }))
    );

    setSelectedClues([]);
  }

  const handleSubmit = () => {
    setShuffledClues(prev => {
      const connects = selectedClues.every(clue => clue.category === selectedClues[0].category);

      return prev.map(clue => {
        const alreadyConnected = clue.connected;
        const newlyConnected = connects && selectedClues.some(selected => selected.id === clue.id);

        return {
          ...clue,
          selected: false,
          connected: alreadyConnected || newlyConnected
        }
      })
    });

    setSelectedClues([]);
  }

  const [solved, setSolved] = useState(false);
  
  useEffect(() => {
    const isSolved = shuffledClues.every(clue => clue.connected === true);

    if (isSolved && !solved) {
      setSolved(true);
      onSolved?.();
    }
  }, [shuffledClues, solved, onSolved])

  return (
    <div className='puzzle-page'>
      <div className='ui'>
        <img src={ConnectNote} className='title' />
        <img src={PopupNote} className='note'/>

        {!solved ?
          <div className='text'>
            Connect the related clues on the board to figure out which pieces of evidence belong together.
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

      {/* connect strings puzzle */}
      <div className='puzzle'>
        <div className='clues'>
          {shuffledClues.map((clue) => (
            <div className={`clue ${clue.selected && 'selected'} ${clue.connected && 'connected'}`} onClick={() => !clue.connected && handleClick(clue)}>
              <div className='text'>{clue.note}</div>
            </div>
          ))}
        </div>

        <div className='buttons'>
          <div id='btn-1' className={`button ${selectedClues.length > 0 && 'active'}`} onClick={() => selectedClues.length > 0 && handleClear()}>
            Deselect All
          </div>
          <div id='btn-2' className={`button ${selectedClues.length == 4 && 'active'}`} onClick={() => selectedClues.length == 4 && handleSubmit()}>
            Submit
          </div>
        </div>
      </div>
    </div>
  )
}
