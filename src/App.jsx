import "./index.css"

import { useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import { Home } from "./pages/Home"
import { LetterPuzzle } from "./pages/LetterPuzzle";
import { BlueprintPuzzle } from "./pages/BlueprintPuzzle";
import { ConnectPuzzle } from "./pages/ConnectPuzzle";

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

  const [solved, setSolved] = useState({
    connect: false,
    blueprint: false,
    letter: false
  });

  const markSolved = (id) => {
    setSolved(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={ <MotionDiv> <Home solved={solved} /> </MotionDiv> } />
          <Route path="/connect" element={ <MotionDiv> <ConnectPuzzle onSolved={() => markSolved("connect")} /> </MotionDiv> } />
          <Route path="/blueprint" element={ <MotionDiv> <BlueprintPuzzle onSolved={() => markSolved("blueprint")} /> </MotionDiv> } />
          <Route path="/letter" element={ <MotionDiv> <LetterPuzzle onSolved={() => markSolved("letter")} /> </MotionDiv> } />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
