import { Link } from "react-router-dom"
import a from './Landing.module.css'
import POKEBOLA from "../../../assest/OIP.jpg"

const Landing = () => {
    return (
        <div className={a.container}>
         
         <div className={a.container1}>
            <h1>PI POKEMONS by IVERIAL</h1>
            <div className={a.containerButtonPokebola}>
            <Link to={'/pokemons'} style={{ textDecoration: "inherit" }} key={a.Link}> 
            <img src={POKEBOLA} alt="pokebola" className={a.pokebola} />
             <button className={a.btn}>Empecemos con la aventura!</button>
           </Link> 
            </div>
      
         </div>
      
       </div>
    )
}

export default Landing
