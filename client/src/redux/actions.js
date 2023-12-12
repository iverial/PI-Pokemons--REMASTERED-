import axios from "axios"


export function getAllPokemons(){
  return function(dispatch){
    axios.get('/pokemons')
    .then(response => response.data)
    .then(jsondata => dispatch({
      type: 'GET_ALL_POKEMONS',
      payload: jsondata,
    }))
  }
}


export const getAllTipos=() => {
    return function(dispatch){
      axios.get('/types')
      .then(response => response.data)
      .then(jsondata => dispatch({
        type: 'GET_TIPOS',
        payload: jsondata
      }))
    }
}

export const getNamePokemon =(Nombre) => {
    return function (dispatch) {
      try {
        if (Nombre.search(/^[a-zA-Zñáéíóúü]*$/)) {
          return alert("El nombre a buscar solo debe contener letras.");
        } else if(!Nombre){
          return alert("Hay que poner un nombre")
        }
        return dispatch({
          type: 'GET_BY_NAME_POKEMON',
          payload: Nombre,
        });
      } catch (error) {
        return alert(`No existe un Pokémon con ese nombre: ${Nombre}`);
      }
    };
  }

export const getPokemonId = (id) => {
    return function (dispatch){
      axios.get( `/pokemons/${id}`)
      .then(response => response.data)
      .then(jsonPokemonIDdata => dispatch({
        type: 'GET_DETAILS',
        payload: jsonPokemonIDdata,  
      }))
    }
  }

export const filterByOrigin = (payload) => {
    return {
        type: 'FILTER_BY_ORIGEN',
        payload: payload,
      };
}

export const  filterByTipos = (payload)=> {
    return {
        type: 'FILTER_BY_TIPOS',
        payload: payload,
    };
}

export const OrderByNombre = (payload) =>{
    return {
        type: 'ORDER_BY_NOMBRE',
        payload: payload
    };
}

export const OrderByAtaque = (payload)=>{
    return {
        type: 'ORDER_BY_ATAQUE',
        payload: payload
    };
}

export const postPokemon = (payload) => {
    return async function () {
      try {
        const response = await axios.post('/pokemons', payload)
         return response
      } catch (error) {
       return error 
      }
    }
  }

export const resetDetail= () => {
    return {
      type: 'RESET_DETAIL',
    };
}

export const deletePoke = (id)=>{
    return function (){
       axios.delete( `/pokemons/${id}`)
       .then(response => console.log('Listo'))
    }
  }
  