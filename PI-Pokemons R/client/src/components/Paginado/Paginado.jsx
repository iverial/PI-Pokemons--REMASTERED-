
import a from "./Paginado.module.css"

const Paginado = ({PokemonsPerPage, allPokemons, paginado})=>{
  const PageNumbers = []
  for (let i = 1; i <= Math.ceil(allPokemons/PokemonsPerPage); i++) {
      PageNumbers.push(i)
  }
  return(
      <nav>
          <ul className={a.Paginado}>
              { PageNumbers &&
              PageNumbers.map(number =>(
                  <li className={a.number} key={number}>
                   <button className={a.numeros} onClick={() => paginado(number)}>{number}</button>  
                  </li>
              ))}
          </ul>
      </nav>
  )
}

export default Paginado