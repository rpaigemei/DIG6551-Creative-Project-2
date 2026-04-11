import { motion } from "motion/react"
import { NavLink } from "react-router-dom"
import Newspaper from "../assets/images/bg/end-news.png"

export function EndPage() {
  return (
    <div className="news-page">
      <motion.img src={Newspaper} className="newspaper"
        style={{
          transformOrigin: "top left"
        }}
        initial={{
          x: -400,
          y: -500,
          rotateZ: -35,
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

      <NavLink to="/" reloadDocument end className="btn"> Replay Game </NavLink>
    </div>
  )
}