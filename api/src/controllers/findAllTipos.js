const { axios } = require("axios");
const { Tipo } = require("../db.js");

const findAllTipos = async () => {
  try {
    for (var i = 1; i <= 18; i++) {
      let tipospkapi = await axios.get(`https://pokeapi.co/api/v2/type/${i}/`);
      let listadtipos = await tipospkapi.data;
      let { name: Nombre } = await listadtipos;
      const newType = await Tipo.findOrCreate({
        where: {
          Nombre: Nombre.toUpperCase(),
        },
      });
    }
    const listadetipos = await Tipo.findAll();
    return listadetipos;
  } catch (error) {
    return ({ error: error.message });
  }
};

module.exports = findAllTipos;
