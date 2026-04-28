import { useState } from "react"
import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
import { containerVariants, lineVariants } from "../components/text-fade-in"
import { stopRingtone } from "../components/play-audio"
import Phone from "../assets/images/bg/phone.png"


export function StartPage() {
  const lines = [
    "Hello… I was told to contact you about a missing person.",
    "She hasn’t been heard from since last night.",
    "She was invited to a large residence outside the city by a man she was secretly seeing.",
    "I’ve gathered what I could and sent it over to you.",
    "I just need to know what happened… Thank you."
  ]

  const [callAnswered, setCallAnswered] = useState(false);

  const handleAnswer = () => {
    setCallAnswered(true);
    stopRingtone();
  }

  return (
    <div className="start-page">
      {!callAnswered
        ? <div className="phone-call">
            <div className="answer" onClick={() => handleAnswer()} />
            
            <motion.img src={Phone} className="phone"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        : <motion.div className="call"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="head">
              INCOMING CALL <br />
              UNKNOWN NUMBER
            </div>
            <motion.div variants={containerVariants} initial="hidden" animate="visible">
              {lines.map((line, i) => (
                <motion.div key={i} variants={lineVariants} className="line">
                  {line}
                </motion.div>
              ))}
            </motion.div>
            <div className="solve">
              <NavLink to="/evidence-board" end className="text">
                Solve the Case -&gt;
              </NavLink>
            </div>
            
          </motion.div>
      }
    </div>
  )
}