import { useState } from 'react';
import { useSelector } from 'react-redux';

const usePagination = () => {

    const allPokemons = useSelector((state) => state.pokemons);
    const [Pokemons, setPokemons] = useState(allPokemons)
    const [ currentPage, setCurrentPage] = useState(1)
    const [ PokemonsPerPage, ] = useState(12)
    const IndexOfLastPokemon = currentPage * PokemonsPerPage // 12
    const IndexOfFirtsPokemon = IndexOfLastPokemon - PokemonsPerPage // 0
    const currentPokemons = allPokemons.slice(IndexOfFirtsPokemon, IndexOfLastPokemon) // 
    setPokemons(currentPokemons)
    const indexPages = Math.ceil(allPokemons.length / PokemonsPerPage) // 
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
      return {
        setCurrentPage,
        currentPokemons,
        PokemonsPerPage,
        back,
        next,
        begin,
        end,
        paginado,
        setPokemons,
        Pokemons,
      }
  }

export default usePagination