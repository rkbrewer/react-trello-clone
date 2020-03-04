'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn(
    //   'Boards',
    //   'listId',
    //   {
    //     type: Sequelize.INTEGER,
    //     references: {
    //       model: 'Lists',
    //       key: 'id'
    //     },
    //     onUpdate: 'CASCADE',
    //     onDelete: 'SET NULL'
    //   });

    await queryInterface.addColumn(
      'Lists',
      'boardId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Boards',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );

    await queryInterface.addColumn(
      'Cards',
      'listId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Lists',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('Boards', 'listId');
    await queryInterface.removeColumn('Lists', 'boardId');
    await queryInterface.removeColumn('Cards', 'listId');
  }
};
