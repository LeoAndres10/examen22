const { Router } = require("express");
const UsuarioController = require("../Controllers/usuarioController");

const createUsuarioRouter = (usuario) => {
  const usuarioRouter = Router();
  const usuarioController = new UsuarioController(usuario);
  usuarioRouter.post("login", usuarioController.login);
  usuarioRouter.post("usuarios", usuarioController.create);

  return usuarioRouter;
};

module.exports = createUsuarioRouter;
