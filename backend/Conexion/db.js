const {Sequelize} =require('sequelize');

const sequelize= new Sequelize(
    'examen2',
    'root',
    'Rockstar1318',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
    .then(()=>console.log('Conexion establecida'))
    .catch((error)=> console.log('error de conexion' + error))

module.exports=sequelize;