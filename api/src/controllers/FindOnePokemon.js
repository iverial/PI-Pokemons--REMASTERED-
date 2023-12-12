const { Pokemon, Tipo } = require("../db.js");

const FindOnePokemon = async (pokemonID) => {
  let array = [];
  let pokeDB = await Pokemon.findOne({
      where: { ID: pokemonID },
      include: {
        model: Tipo,
        as: "Tipos",
        attributes: ["Nombre"],
        through: {
          attributes: [],
        },
      },
    });
    array.push(pokeDB);
    return array;
};

module.exports = FindOnePokemon;
