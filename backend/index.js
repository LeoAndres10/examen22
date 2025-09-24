const express = require('express');
const cors = require('cors');
const sequelize = require('./Conexion/db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Producto = require('./Modelos/Producto');
const app = express();
app.use(express.json());
app.use(cors());

app.get('/producto', async (req, res) => {
  try {
    const producto = await Producto.findAll(); 
   return res.json({ message: 'Listo', data:producto });

  } catch (error) {
    console.error('Error al buscar productos:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});

app.post('/productos', async (req, res) => {
  try { 
    const { nombre, descripcion, precio, estado, categoria, url } = req.body;

    // Validación básica
    if (!nombre || !descripcion || !precio || !estado || !categoria || !url) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    
    const newProducto = await Producto.create({
      nombre,
      descripcion,
      precio,
      estado,
      categoria,
      url
      
    });

  

    res.status(201).json({
      message: 'Producto creado correctamente',
      user: {
        id: newProducto.id,
        nombre: newProducto.nombre,
        descripcion: newProducto.descripcion,
        precio: newProducto.precio,
        estado: newProducto.estado,
        url: newProducto.url

       
      }
    });

  } catch (error) {
    console.error('Error al crear producto:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.delete('/items/:id', async(req,resp) =>{
    
    try {

        const deleted= await Producto.destroy({
            where: {id: req.params.id}
        })

          if (deleted) {
            resp.status(200).json({'mensaje':'Eliminado correctamente'})
        }
        else {
            resp.status(400).json({'mensaje':'No existe el registro'})
        }
        
    } catch (error) {
             resp.status(500).json({ 'mensjae': 'Ocurrio un errr', 'detalle': error })
    }
})

app.listen(5000, () =>{
    console.log('Aplicacion Iniciada en el puerto 5000')
});
