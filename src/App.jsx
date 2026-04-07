import './index.css'

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import { Home } from './pages/Home'
import { LetterPuzzle } from './pages/LetterPuzzle';
import { BlueprintPuzzle } from './pages/BlueprintPuzzle';
import { ConnectPuzzle } from './pages/ConnectPuzzle';

function MotionDiv({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ height: "100%" }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation();

  return (
    <div className='app'>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <MotionDiv> <Home /> </MotionDiv> } />
          <Route path="/connect" element={ <MotionDiv> <ConnectPuzzle /> </MotionDiv> } />
          <Route path="/blueprint" element={ <MotionDiv> <BlueprintPuzzle /> </MotionDiv> } />
          <Route path="/letter" element={ <MotionDiv> <LetterPuzzle /> </MotionDiv> } />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
