'use strict';
module.exports = (sequelize, DataTypes) => {
  const materia = sequelize.define('materia', {
    nombre: DataTypes.STRING,
    id_carrera: DataTypes.INTEGER
  }, {});
  materia.associate = function(models) {
    materias.belongsTo(models.carrera
      ,{ 
        as: 'Carrera-Relacionada',
        foreignKey:'id_carrera'
      })
    materias.hasMany(models.docente, { 
        as:"docente", 
        primaryKey:"id"
    })
  };
  return materia;
};