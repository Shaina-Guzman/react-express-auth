const Quizzes = require('../models/quizzes');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await Quizzes.deleteAll();
  await Quizzes.create('Addition');
  await Quizzes.create('Subtraction');
  await Quizzes.create('Multiplication');
  await Quizzes.create('Division');
};
