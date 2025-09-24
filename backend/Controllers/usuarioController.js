require("dotenv").config({ path: "./.env" });
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UsuarioController {
  constructor(usuario) {
    this.usuario = usuario;
  }

  create = async (req, res, next) => {
    try {
      const { nombre, contrasenia, correo, direccion } = req.body;
      console.log(req.body);
      if (!nombre || !contrasenia || !correo || !direccion) {
        return res
          .status(400)
          .json({ error: "Todos los campos son obligatorios" });
      }
      const usuario = await this.usuario.findOne({
        where: { correo: correo },
      });
      if (usuario !== null) {
        return res.status(401).json({ message: "Usuario ya existe" });
      }
      const saltRounds = 10;

      const hashedPassword = await bcrypt.hash(contrasenia, saltRounds);

      const newUsuario = await this.usuario.create({
        nombre,
        hashedPassword,
        correo,
        direccion,
      });
      console.log(newUsuario);
      res.status(201).json({
        success: true,
        message: "Usuario creado correctamente",
        user: {
          id: newUsuario.id,
          nombre: newUsuario.nombre,
          correo: newUsuario.correo,
          direccion: newUsuario.direccion,
        },
      });
    } catch (error) {
      res.status(500).json({
        error: "Error interno del servidor al crear usuario",
        eer: error.message,
      });
    }
  };

  login = async (req, res, next) => {
    try {
      const { correo, contrasenia_plana } = req.body;
      if (!correo || !contrasenia_plana) {
        return res.status(400).json({ message: "Campos requeridos" });
      }
      const usuario = await this.usuario.findOne({
        where: { correo: correo },
      });

      if (!usuario) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      // Comparar la contraseña proporcionada con la contraseña encriptada
      const isMatch = await bcrypt.compare(
        contrasenia_plana,
        usuario.contraseña
      );
      console.log(isMatch);
      if (!isMatch) {
        return res.status(401).json({ mensaje: "Credenciales inválidas" });
      }
      const token = await jwt.sign(
        {
          correo: usuario.correo,
          nombre: usuario.nombre,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "1h",
        }
      );
      delete usuario.dataValues.contraseña;
      res.status(200).json({ token: token, usuario: usuario });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = UsuarioController;
