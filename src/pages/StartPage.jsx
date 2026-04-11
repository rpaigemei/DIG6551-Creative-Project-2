import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
import Newspaper from "../assets/images/bg/start-news.png"

export function StartPage() {
  return (
    <div className="news-page">
      <motion.img src={Newspaper} className="newspaper"
        style={{
          transformOrigin: "top right"
        }}
        initial={{
          x: 400,
          y: -500,
          rotateZ: 35,
          rotateX: 60,
          opacity: 0,
          scale: 0.95,
        }}
        animate={{
          x: 0,
          y: 0,
          rotateZ: 0,
          rotateX: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      <NavLink to="/evidence-board" end className="btn"> Solve the Case -&gt; </NavLink>
    </div>
  )
}