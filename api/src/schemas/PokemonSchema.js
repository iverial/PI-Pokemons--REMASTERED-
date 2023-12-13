const z = require("zod");

const PokemonSchema = z.object({
  Nombre: z.string({
    invalid_type_error: "Pokemon name must be a string",
    required_error: "Pokemon name is required",
  }),
  Vida: z
    .number({
      invalid_type_error: "Pokemon HP must be a number",
      required_error: "Pokemon HP is required",
    })
    .int()
    .positive()
    .max(200),
  Ataque: z
    .number({
      invalid_type_error: "Pokemon attack must be a number",
      required_error: "Pokemon attack is required",
    })
    .int()
    .positive()
    .max(200),
  Defensa: z
    .number({
      invalid_type_error: "Pokemon Defense must be a number",
      required_error: "Pokemon Defense ",
    })
    .int()
    .positive()
    .max(200),
  Velocidad: z
    .number({
      invalid_type_error: "Pokemon Speed must be a number",
      required_error: "Pokemon Speed is required",
    })
    .int()
    .positive()
    .max(200),
  Altura: z
    .number({
      invalid_type_error: "Pokemon Height must be a number",
      required_error: "Pokemon Height is required",
    })
    .int()
    .positive()
    .max(200),
  Peso: z
    .number({
      invalid_type_error: "Pokemon weight must be a number",
      required_error: "Pokemon weight is required",
    })
    .int()
    .positive()
    .max(1000),
    Tipos: z.array(z.number().min(1).max(18))
});



// enum([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
//   ])
function validatePokemon(object) {
  return PokemonSchema.safeParse(object);
}

module.exports = { 
    validatePokemon 
};
