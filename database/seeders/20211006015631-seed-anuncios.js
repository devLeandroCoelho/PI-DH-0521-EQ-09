'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('anuncios', [{
        id: 1,
        titulo: 'Tablet Acer',
        usuarios_id: 1,
        categoria_id: 6,
        status_id: 2,
        descricao: 'Vendo Tablet Iconia Acer7. Esta quase novo apenas arranhões normais de uso',
        cpf: '12345678912',
        telefone:'984475984',
        valor: 278.9,
        localizacao: 'Florianópolis/SC',
      },
      {
        id: 2,
        titulo: 'Playstation 4',
        cpf: '12341178912',
        telefone:'984464984',
        usuarios_id: 2,
        categoria_id: 6,
        status_id: 2,
        descricao: 'Vendo Play 4. Varios jogos digitais e 2 controles',
        valor: 1599.9,
        localizacao: 'São Paulo/SP',
      },
      {
        id: 3,
        titulo: 'Mesa de Escritório',
        cpf: '12345341912',
        telefone:'984375984',
        usuarios_id: 3,
        categoria_id: 2,
        status_id: 2,
        descricao: 'Vendo Mesa de escritorio Preta com tampo Branco. Tem um pequeno arranhão na parte lateral',
        valor: 199.75,
        localizacao: 'Fortaleza/CE',
      },
      {
        id: 4,
        titulo: 'Cadeira Gamer',
        cpf: '12345675432',
        telefone:'982275984',
        usuarios_id: 4,
        categoria_id: 1,
        status_id: 2,
        descricao: 'Vendo Cadeira GaMeR. Meu filho não passou de ano e com isso não vai mais jogar',
        valor: 899,
        localizacao: 'Porto Alegre/RS',
      },
      // {
      //   id: 5,
      //   titulo: 'Armario de Ferro',
      //   cpf: '12432678912',
      //   telefone:'981235984',
      //   usuarios_id: 1,
      //   categoria_id: 3,
      //   status_id: 2,
      //   descricao: 'Vendo armário de ferro. Com o encerramento da empresa estou liquidando todos os móveis. IMPERDíVEL!',
      //   valor: 455.1,
      //   localizacao: 'Blumenau/SC',
      // },
      // {
      //   id: 6,
      //   titulo: 'Notebook HP',
      //   cpf: '12334278912',
      //   telefone:'982315984',
      //   usuarios_id: 2,
      //   categoria_id: 6,
      //   status_id: 2,
      //   descricao: 'Vendo meu notebook HP DV4-1880BR. Aceito apenas em dinheiro',
      //   valor: 1998.5,
      //   localizacao: 'Bauru/SP',
      // },
      // {
      //   id: 7,
      //   titulo: 'Notebook Acer',
      //   cpf: '12345456912',
      //   telefone:'984476534',
      //   usuarios_id: 3,
      //   categoria_id: 6,
      //   status_id: 2,
      //   descricao: 'Vendo notebook novo na caixa. CPU i5 com 16Gb de Ram',
      //   valor: 4000,
      //   localizacao: 'Fortaleza/CE',
      // },
      // {
      //   id: 8,
      //   titulo: 'Note Dell',
      //   cpf: '12345778912',
      //   telefone:'984665984',
      //   usuarios_id: 4,
      //   categoria_id: 6,
      //   status_id: 2,
      //   descricao: 'Vendo notebook usado para retirada de peças. Display está quebrado',
      //   valor: 1000.5,
      //   localizacao: 'Porto Alegre/RS',
      // },
      // {
      //   id: 9,
      //   titulo: 'Notebook Avell',
      //   cpf: '12366678912',
      //   telefone:'984555984',
      //   usuarios_id: 2,
      //   categoria_id: 6,
      //   status_id: 1,
      //   descricao: 'Vendo notebook gamer. i7 com 32 GB de Ram SSD de 256GB e um HD de 2 Tb.',
      //   valor: 2050.49,
      //   localizacao: 'Florianópolis/SC',
      // },
      // {
      //   id: 15,
      //   titulo: 'Cama Box Casal',
      //   cpf: '123424678912',
      //   telefone:'955475984',
      //   usuarios_id: 1,
      //   categoria_id: 4,
      //   status_id: 2,
      //   descricao: 'Vendo cama Casal sem colchão',
      //   valor: 359.9,
      //   localizacao: 'Blumenau/SC',
      // },
      // {
      //   id: 16,
      //   titulo: 'Cama de Solteiro',
      //   cpf: '12345631912',
      //   telefone:'984475564',
      //   usuarios_id: 3,
      //   categoria_id: 4,
      //   status_id: 3,
      //   descricao: 'Vendo cama de Solteiro com colchão',
      //   valor: 400,
      //   localizacao: 'Porto Alegre/RS',
      // },
      // {
      //   id: 17,
      //   titulo: 'Beliche',
      //   cpf: '12435678912',
      //   telefone:'953475984',
      //   usuarios_id: 2,
      //   categoria_id: 4,
      //   status_id: 2,
      //   descricao: 'Vendo Beliche, acompanha os 2 colchões de solteiro',
      //   valor: 750.99,
      //   localizacao: 'Bauru/SP',
      // },
      // {
      //   id: 18,
      //   titulo: 'Cama Queen',
      //   cpf: '12445678912',
      //   telefone:'982375984',
      //   usuarios_id: 4,
      //   categoria_id: 4,
      //   status_id: 2,
      //   descricao: 'Vendo cama tamanho Queen',
      //   valor: 650,
      //   localizacao: 'Florianópolis/SC',
      // },
      // {
      //   id: 19,
      //   titulo: 'Cama King size',
      //   cpf: '12312678912',
      //   telefone:'984125984',
      //   usuarios_id: 3,
      //   categoria_id: 4,
      //   status_id: 5,
      //   descricao: 'Vendo cama King Size',
      //   valor: 1000,
      //   localizacao: 'Brasilia/DF',
      // },
      // {
      //   id: 20,
      //   titulo: 'Phone de Ouvidos Razer Game',
      //   cpf: '12345632912',
      //   telefone:'984456984',
      //   usuarios_id: 2,
      //   categoria_id: 5,
      //   status_id: 2,
      //   descricao: 'Vendo novo na caixa Fone de ouvido gamer',
      //   valor: 2000.99,
      //   localizacao: 'Brasilia/DF',
      // },
      // {
      //   id: 21,
      //   titulo: 'Luminária de cabeceira',
      //   cpf: '12345674312',
      //   telefone:'984472384',
      //   usuarios_id: 1,
      //   categoria_id: 5,
      //   status_id: 5,
      //   descricao: 'Acopanha lampada Led',
      //   valor: 120,
      //   localizacao: 'Brasilia/DF',
      // },
      // {
      //   id: 22,
      //   titulo: 'Fone de Ouvido Beats',
      //   cpf: '12345678955',
      //   telefone:'984475224',
      //   usuarios_id: 3,
      //   categoria_id: 5,
      //   status_id: 2,
      //   descricao: 'Vendo Fone Beats. Tem que trocar a borrachinha do fone direito',
      //   valor: 130,
      //   localizacao: 'Bauru/SP',
      // }
    ], );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('anuncios', null, {});
  }
};