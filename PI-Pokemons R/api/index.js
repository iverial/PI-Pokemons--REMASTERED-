const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

//CONEXION BASE DE DATOS Y POSTERIORMENTE ENCIENDO EL SERVER
conn.sync({ force: true }).then(() => {
  server.listen(port, "0.0.0.0", () => {
    console.log('%s listening at 3001'); 
  });
});