import { NavLink } from "react-router-dom"
import { playNewspaper } from "../components/play-audio"
import Title from "../assets/images/bg/title.png"
import PlayBtn from "../assets/images/bg/play.png"

export function TitlePage() {
  return (
    <div className="title-page">
      <img src={Title} className="title" />

      <NavLink to="/unsolved-case" end onClick={() => playNewspaper()}>
        <img src={PlayBtn} className="play" />
      </NavLink>
    </div>
  )
}