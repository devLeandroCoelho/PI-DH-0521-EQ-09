module.exports = (sequelize, DataTypes) => {

  const usuario = sequelize.define(
    'Usuario', {
      nome: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      telefone: {
        type: DataTypes.STRING(12),
        allowNull: false
      },
      //cpf: {
       // type: DataTypes.STRING(11),
       // allowNull: false
      //},
      endereco: {
        type: DataTypes.STRING(45),
        allowNull: false
      },
      /*genero: {
        type: DataTypes.STRING(15),
        allowNull: false
      },
      complemento: {
        type: DataTypes.STRING(45),
        allowNull: false
      },*/
      email: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true
      },
      senha: {
        type: DataTypes.STRING(256),
        allowNull: false
      },
    }, {
      tableName: "usuarios",
      timestamps: false
    }
  );

  usuario.associate = (models) => {

    // Associando usuário com contatos (um usuário possui muitos contatos);
    usuario.hasMany(models.Anuncio, {
      as: 'usuarios_anuncios',
      foreignKey: 'usuarios_id'
    });
  }

  return usuario;

}