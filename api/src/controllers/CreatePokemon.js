
const CreatePokemon = async (Nombre, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipos) => {
    if(isNaN(Vida) || isNaN(Ataque) || isNaN(Defensa) || isNaN(Velocidad) || isNaN(Altura) || isNaN(Peso) || Tipos.length === 0){
        return res.status(404).send("Algun dato no es un numero o no contiene un tipo")
      } else if(!Nombre){
        return res.status(404).send('El nombre tiene que existir')
      }
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
}

module.exports = CreatePokemon