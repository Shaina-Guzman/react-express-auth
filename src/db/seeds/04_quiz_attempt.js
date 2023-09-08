const Quiz_Attempts = require('../models/quiz_attempts');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await Quiz_Attempts.deleteAll();
  await Quiz_Attempts.create(1, 3, 90, 9);
 //await Quiz_Attempts.update(1, 1, 5, 5);
  // await Quiz_Attempts.create(2, 4, 100, 10);
};
