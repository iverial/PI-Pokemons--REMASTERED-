import { useState } from "react"
import a from "./Paginado.module.css"

const Paginado = ({PokemonsPerPage, allPokemons, paginado}) => {

    const [currentPage,setCurrentPage] = useState(1)
    const [PokemonsPerPage, ] = useState(12)
    const IndexOfLastPokemon = currentPage * PokemonsPerPage // 11
    const IndexOfFirtsPokemon = IndexOfLastPokemon - PokemonsPerPage // 0
    const currentPokemons = allPokemons.slice(IndexOfFirtsPokemon, IndexOfLastPokemon)
    const indexPages = Math.ceil(allPokemons.length / PokemonsPerPage)
    const back = () => {
      if (currentPage !== 1) {
        setCurrentPage(currentPage - 1);
      }
    };
    const next = () => {
      if (currentPage !== indexPages) {
        setCurrentPage(currentPage + 1);
      }
    };
    const begin = () => {
      setCurrentPage(1);
    };
    const end = () => {
      setCurrentPage(indexPages);
    };
    if (currentPage > indexPages) {
      back();
    }
    const paginado = (PageNumber) => {
      setCurrentPage(PageNumber)
    }
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