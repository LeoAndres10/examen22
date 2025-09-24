const { DataTypes, STRING } = require('sequelize');
const sequelize = require('../Conexion/db');

const Producto = sequelize.define('producto', {
    
    nombre: {
        type: DataTypes.STRING
    },

    descripcion: {
        type: DataTypes.STRING
    },
    precio:{
        type: DataTypes.INTEGER
    },
    estado: {
        type:DataTypes.STRING
    },
    categoria:{
        type: DataTypes.STRING
    },
    url: {
        type:DataTypes.STRING
    }
},
    {
        tableName: 'producto',
        timestamps: false
    }
)

module.exports=Producto;