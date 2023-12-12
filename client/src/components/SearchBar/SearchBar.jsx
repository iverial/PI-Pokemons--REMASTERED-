/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getNamePokemon } from "../../redux/actions";
import a from "./SearchBar.module.css"

const SearchBar = () => {

    const dispatch = useDispatch();
    const allpokemons = useSelector((state) => state.pokemons)
    const [Nombre, setNombre] = useState("");

    useEffect(() => {
      dispatch(getAllPokemons())
    },[dispatch])
  

    function handleInputChange(e) {
      e.preventDefault();
      setNombre(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();
      try {
        let encontrarNombre = allpokemons.every((e) => e.Nombre.toUpperCase() !== Nombre.toUpperCase())
          if(!Nombre){
            return alert('Debes colocar un Nombre')
          }else if(encontrarNombre){
            return alert('No existe ese pokemon')
          } else {
      dispatch(getNamePokemon(Nombre.toUpperCase()));
      setNombre(""); 
      }
      } catch (error) {
        console.log(error)
        return alert('Algo salio mal, intenta nuevamente!')
      }
      
    }



    return(
        <div className={a.searchcontainer}>

      <header className={a.container}>
			<form>
				<div className={a.formgroup}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className={a.iconsearch}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
					<input
			       // eslint-disable-next-line no-mixed-spaces-and-tabs
			       value={Nombre}
             className={a.inputsearch}
             onChange={(e) => handleInputChange(e)}
             type="text"
             placeholder="Buscar Pokemon..."
					/>
				</div>

				<button className={a.btnsearch} onClick={(e) => handleSubmit(e)} type="submit">Buscar</button>
			</form>
		</header>




        {/* <button className={a.btnsearch} onClick={(e) => handleSubmit(e)} type="submit">
         buscar
        </button>    */}
        {/* <input
          value={Nombre}
          className={a.inputsearch}
          onChange={(e) => handleInputChange(e)}
          type="text"
          placeholder="Buscar Pokemon..."
        /> */}
       
      </div>
    );
}

export default SearchBar