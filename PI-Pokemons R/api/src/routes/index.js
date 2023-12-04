const { Router, application } = require("express");
const router = Router();
const { Pokemon, Tipo } = require("../db.js");



//CONTROLLERS
const AxiosPokemons = require("../controllers/AxiosPokemons");
const FindOnePokemon = require("../controllers/FindOnePokemon");
const { axios } = require("axios");


router.get("/pokemons/:id", async (req, res) => {
  let pokemonID = req.params.id;
  if (pokemonID > 0) {
    try {
      // BUSCO EN LA API
      let array = await AxiosPokemons(pokemonID);
      res.send(array);
    } catch (error) {
      res.status(404).send("El pokemon no existe");
    }
  } else {
    try {
      // BUSCO INTERNAMENTE EN LA DB
      let array = await FindOnePokemon(pokemonID);
      res.status(201).send(array);
    } catch (error) {
      res.status(404).send("Pokemon no encontrado");
    }
  }
});

router.get("/pokemons", async (req, res) => {
  // ESTO ES POR SI VIENE UNA QUERY.
  if (req.query.name) {
    console.log(req.query.name)
    let pokemonName = req.query.name;
    try {
      //BUSCO EN LA API POR NAME
      let array = await AxiosPokemons(pokemonName);
      return res.status(201).send(array);
    } catch (error) {
      //BUSCO EN LA DB
      let pkDB = await FindOnePokemon(pokemonName);
      if (pkDB !== null) {
        res.status(201).send(pkDB);
      }
      res.status(404).send("El pokemon no existe");
    }

    // ACA BUSCO TODOS LOS POKEMONES EN GENERAL.
  } else {
    let pokemonsALL = await AxiosPokemons();
    return res.status(200).send(pokemonsALL);
  }
});

// router.get("/pokemons/name")

router.post('/pokemons', async (req, res) => {
    const { Nombre, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipos} = req.body; 
    try {
    const [instance, pokeCreado] = await Pokemon.findOrCreate({
        where: { Nombre: Nombre },
        defaults: {
      Nombre: Nombre.toUpperCase(),
      Vida,
      Ataque,
      Defensa,
      Velocidad,
      Altura,
      Peso,
        } 
        });
    await instance.addTipos(Tipos)
        if(pokeCreado){
          res.status(200).send(`Pokemon creado existosamente ID: ${instance.ID}`)
        } else {
            res.status(404).send('El pokemon ya existe') 
        }    
    } catch (error) {
        res.status(404).send({error: error.message})
    }
    
  })

router.get("/types", async (req, res) => {
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
      res.send(listadetipos);
    });

router.delete("/pokemons/:ID", async  (req, res) => {
    let {ID} = req.params
  
    await Pokemon.destroy({
      where:{ID: ID}
    })
    res.send("Pokemon borrado")
})


module.exports = router;
