module.exports = (sequelize, DataTypes) => {

    const u = sequelize.define(
        'Contato', {

        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        usuarios_id: DataTypes.INTEGER
    },
        {
            tableName: 'contatos',
            timestamps: false
        }
    );

    u.associate = (models) => {
        //associando usuario com contatos para

        u.hasMany(models.Telefone, { as: 'telefones', foreignKey: 'contatos_id' })
        u.belongsTo(models.Usuario, { as: 'usuario' , foreignKey: 'usuarios_id' })
    }

    // Usar belongsTo quando queremos mostrar que o dado pertence a outro dado.

    //o return sempre deve estar fora das chaves de uma função!.
    
    return u;
}
