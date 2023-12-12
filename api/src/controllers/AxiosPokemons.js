const axios = require("axios");
const ArrayDetallada = require("../controllers/ArrayDetallada");
const { Pokemon, Tipo } = require("../db.js");

const AxiosPokemons = async (pokemonID, pokemonName) => {
  let array = [];
  if (pokemonID || pokemonName) {
    // BUSCO POR ID O POR NOMBRE
    let pokemonporidOName = pokemonID
      ? await axios.get(`https://pokeapi.co/api/v2/pokemon/${Number(pokemonID)}/`)
      : await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}/`
        );
    let data = await pokemonporidOName.data;
    await ArrayDetallada(array, data);
    return array;
  } else {
    // BUSCO EN GENERAL TODOS LOS POKEMONS SI ES QUE NO RECIBO PARAMETROS.
    for (let i = 1; i <= 40; i++) {
      let pokemonlist = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${i}/`
      );
      let pokemonlistdata = await pokemonlist.data;
      await ArrayDetallada(array, pokemonlistdata);
    }
    let pokeDB = await Pokemon.findAll({
      include: {
        model: Tipo,
        as: "Tipos",
        attributes: ["Nombre"],
        through: {
          attributes: [],
        },
      },
    });
    return pokeDB.concat(array)
  }
};

module.exports = AxiosPokemons;
