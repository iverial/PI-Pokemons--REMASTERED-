const ArrayDetallada = (array, infoafiltrar)=> {
    let { name, id, height, weight, sprites, stats, types } = infoafiltrar;
    array.push({
     ID: id,
     Nombre: name.toUpperCase(),
     Vida: stats[0].base_stat,
     Ataque: stats[1].base_stat,
     Defensa: stats[2].base_stat,
     Velocidad: stats[5].base_stat,
     Altura: height,
     Peso: weight,
     Tipos: [
       { Nombre: types[0].type.name.toUpperCase() },
       types[1] ? { Nombre: types[1]?.type.name.toUpperCase() } : null,
     ],
     Imagen: sprites.other.dream_world.front_default,
   });
 }

module.exports = ArrayDetallada