import { Link } from "react-router-dom"
import a from './Landing.module.css'
import POKEBOLA from "../../../assest/OIP1.png"

const Landing = () => {
    return (
        <div className={a.container}>
          <div className={a.PokebolaandTitulo}>
         <img src={POKEBOLA} alt="pokebola" className={a.pokebola} />  
          <h1 className={a.titulo}>PI POKEMONS by IVERIAL</h1>  
          </div>
   
            <div className={a.containerButtonPokebola}>
         
     
          
     <Link to={'/pokemons'} style={{ textDecoration: "inherit" }} key={a.Link}> 
             <button className={a.btn}>START</button>
      </Link> 
            </div>
 
       </div>
    )
}

export default Landing
