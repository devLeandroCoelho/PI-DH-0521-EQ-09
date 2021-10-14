module.exports = (sequelize, DataTypes) => {

    const u = sequelize.define(
        'tb_anuncios', {

        titulo: DataTypes.STRING,
        usuarios_id: DataTypes.INTEGER,
        categoria_id: DataTypes.STRING,
        created_at: DataTypes.TIMESTAMP,
        updated_at: DataTypes.TIMESTAMP,
        status_id: DataTypes.INTEGER,
        descricao_id: DataTypes.STRING,
        valor: DataTypes.DOUBLE,
        Localização: DataTypes.STRING
    },
        {
            tableName: 'anuncios',
            timestamps: false
        }
    );

//     u.associate = (models) => {
//         //associando usuario com contatos para

//         u.hasMany(models.Telefone, { as: 'telefones', foreignKey: 'contatos_id' })
//         u.belongsTo(models.Usuario, { as: 'usuario' , foreignKey: 'usuarios_id' })
//     }

//     // Usar belongsTo quando queremos mostrar que o dado pertence a outro dado.

//     //o return sempre deve estar fora das chaves de uma função!.
    
//     return u;
// 
