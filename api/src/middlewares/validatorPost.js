

const validatorPost = (req,res,next) =>{
   const { Nombre, Vida, Ataque, Defensa, Velocidad, Altura, Peso, Tipos} = req.body;
  if(isNaN(Vida) || isNaN(Ataque) || isNaN(Defensa) || isNaN(Velocidad) || isNaN(Altura) || isNaN(Peso) || Tipos.length === 0){
    return res.status(404).send("Algun dato no es un numero o no contiene un tipo")
  } else if(!Nombre){
    return res.status(404).send('El nombre tiene que existir')
  }
  next();
}

module.exports = validatorPost