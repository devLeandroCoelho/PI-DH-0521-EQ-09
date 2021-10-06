module.exports = (sequelize, DataTypes) => {

  const usuario = sequelize.define(
    'Usuario', {
      nome: DataTypes.STRING(45),
      telefone: DataTypes.STRING(12),
      endereco: DataTypes.STRING(45),
      senha: DataTypes.STRING(256),
    }, 
    {
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

