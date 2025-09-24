const express = require("express");
const Usuario = require("./Modelos/Usuario");
const sequelize = require("./Conexion/db");
const createUsuarioRouter = require("./Routes/usuarioRoutes");
const PORT = process.env.PORT || 5000;
const cors = require("cors");
const createApp = async (usuario) => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  app.use("/", createUsuarioRouter(usuario));
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
  await sequelize.authenticate();
  await Usuario.sync({ force: false });
};

module.exports = createApp;
