import Card from "./Card"
import "./style.css"
import {Link} from "react-router"


function Home() {


  return (
    <>
    <title>Home Page</title>
    <section className="hero">
      <div className="left_hero">
        <h1>Only exquisite refreshing</h1>
        <p>Phosfluorescently maintain impactful process.</p>
        <Link to={"/"} className="hero_link">READ MORE</Link>
      </div>
      <div className="right_hero">
      </div>
    </section>
    <Card/>
    </>
  )
}

export default Home