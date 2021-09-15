module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('orders',
    [
      { user_id: 1, product_id: 1 },
      { user_id: 1, product_id: 3 },
      { user_id: 2, product_id: 1 },
      { user_id: 2, product_id: 2 },
      { user_id: 3, product_id: 4 },
      { user_id: 3, product_id: 5 },
      { user_id: 3, product_id: 3 },
    ],
    {}),

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('orders', null, {});
  },
};