import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "motion/react"
import { containerVariants, lineVariants } from "../components/text-fade-in"
import { playError, playWritingShort } from "../components/play-audio"
import ConnectNote from "../assets/images/notes/connect.png"
import Note from "../assets/images/paper/ui.png"

const categories = [
  {id: 0, category: "Property must be abandoned"},
  {id: 1, category: "The space was setup carefully"},
  {id: 2, category: "They had secret communication"},
  {id: 3, category: "There is a hidden room here"},
]

const clues = [
  {id: 1, note: "Peeling paint", category: 0, selected: false, connected: false},
  {id: 2, note: "Cobwebs in every corner", category: 0, selected: false, connected: false},
  {id: 3, note: "Broken locks", category: 0, selected: false, connected: false},
  {id: 4, note: "Overgrown lawn", category: 0, selected: false, connected: false},

  {id: 5, note: "Light left on in the hallway", category: 1, selected: false, connected: false},
  {id: 6, note: "Path to the room cleared", category: 1, selected: false, connected: false},
  {id: 7, note: "Tools left nearby", category: 1, selected: false, connected: false},
  {id: 8, note: "Blanket folded neatly", category: 1, selected: false, connected: false},

  {id: 9, note: "Calls to unknown number", category: 2, selected: false, connected: false},
  {id: 10, note: "Handwritten envelope", category: 2, selected: false, connected: false},
  {id: 11, note: "Incoming text: \"Can't wait.\"", category: 2, selected: false, connected: false},
  {id: 12, note: "Location turned off", category: 2, selected: false, connected: false},

  {id: 13, note: "Narrow hallway upstairs", category: 3, selected: false, connected: false},
  {id: 14, note: "Library door ajar", category: 3, selected: false, connected: false},
  {id: 15, note: "Hidden latch under bookshelf", category: 3, selected: false, connected: false},
  {id: 16, note: "Layout differs from blueprint", category: 3, selected: false, connected: false},
];

export function ConnectPuzzle({ onSolved }) {
  const [lines, setLines] = useState([]);

  const [shuffledClues, setShuffledClues] = useState(() => 
    clues
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  );

  const [shakeIDs, setShakeIDs] = useState([]);
  const shake = {
    shake: {
      x: [0, -3, 3, -2, 2, -1, 1, 0],
      transition: { duration: 0.4 }
    }
  }

  const [pulseIDs, setPulseIDs] = useState([]);
  const pulse = {
    pulse: {
      scale: [1, 1.04, 1],
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };
  
  const [selectedClues, setSelectedClues] = useState([]);

  const handleClick = (item) => {
    if (!item.selected && selectedClues.length === 4) {
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
    const connects = selectedClues.every(clue => clue.category === selectedClues[0].category);

    const ids = selectedClues.map(c => c.id);

    if (!connects) {
      setShakeIDs(ids);

      setShuffledClues(prev =>
        prev.map(clue =>
          ids.includes(clue.id)
            ? {...clue, selected: false}
            : clue
        )
      );

      setSelectedClues([]);
      playError();
      setTimeout(() => setShakeIDs([]), 400);

      return;
    }

    setPulseIDs(ids);
    playWritingShort();
    setTimeout(() => setPulseIDs([]), 350);

    setShuffledClues(prev => {
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

    const line = selectedClues[0].category;
    setLines(prev => [...prev, categories[line].category])

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
    <div className="puzzle-page">
      <div className="ui">
        <img src={ConnectNote} className="title" />
        <img src={Note} className="note"/>

        {lines.length === 0
          ? <div className="text"> Connect the related clues on the board to figure out which pieces of evidence belong together. </div>
          : <motion.div className="text reveals"
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

              {solved &&
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="back"
                >
                  <NavLink to="/evidence-board" end> Back to evidence board -&gt; </NavLink>
                </motion.div>
              }
            </motion.div>
        }
      </div>

      {/* connect strings puzzle */}
      <div className="puzzle">
        <div className="connect-clues">
          {shuffledClues.map((clue) => (
            <motion.div
              variants={{...shake, ...pulse}}
              animate={shakeIDs.includes(clue.id)
                ? "shake"
                : pulseIDs.includes(clue.id)
                  ? "pulse"
                  : ""
              }
            >
              <div className={`clue ${clue.selected && "selected"} ${clue.connected && "connected"}`} onClick={() => !clue.connected && handleClick(clue)}>
                <div className="text">
                  {clue.note}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="buttons">
          <div id="btn-1" className={`button ${selectedClues.length > 0 && "active"}`} onClick={() => selectedClues.length > 0 && handleClear()}>
            <div className="text">Deselect All</div>
          </div>
          <div id="btn-2" className={`button ${selectedClues.length == 4 && "active"}`} onClick={() => selectedClues.length == 4 && handleSubmit()}>
            <div className="text">Submit</div>
          </div>
        </div>
      </div>
    </div>
  )
}
