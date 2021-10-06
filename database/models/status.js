module.exports = (sequelize, DataTypes) => {

  const status = sequelize.define(
    'Status', {
      nome: DataTypes.STRING,
    }, {
      tableName: "status",
      timestamps: false
    }
  );

  status.associate = (models) => {

    // Associando usuário com contatos (um usuário possui muitos contatos);
    status.hasMany(models.Anuncio, {
      as: 'Status_Anuncios',
      foreignKey: 'status_id'
    });
  }

  return status;

}