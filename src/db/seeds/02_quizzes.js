const Quizzes = require('../models/quizzes');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  await Quizzes.deleteAll();
  await Quizzes.create('Addition' , 'https://www.youtube.com/embed/Q9sLfMrH8_w?si=Uh8TfsumHhjlhaTK');
  await Quizzes.create('Subtraction' , 'https://www.youtube.com/embed/qKxQ33KcRWQ?si=biT2J0DFGz3E8yE0');
  await Quizzes.create('Multiplication', 'https://www.youtube.com/embed/RUGs1NmEikQ?si=0I4TAijiqi1Hs3Cb');
  await Quizzes.create('Division', 'https://www.youtube.com/embed/zuaFvGnNDgE?si=FIM82bD9qse1qJV9');
};
