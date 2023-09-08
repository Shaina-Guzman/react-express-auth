const knex = require('../knex');

class Quiz_Attempts {

  constructor({ id, user_id, quiz_id, percentage, score_count }) {
    this.id = id;
    this.user_id = user_id;
    this.quiz_id = quiz_id;
    this.percentage = percentage;
    this.score_count = score_count;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM quiz_attempts';
      const { rows } = await knex.raw(query);
      return rows.map((quiz_attempts) => new Quiz_Attempts(quiz_attempts));
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM quiz_attempts WHERE id = ?';
      const { rows: [quiz_attempts] } = await knex.raw(query, [id]);
      return quiz_attempts ? new Quiz_Attempts(quiz_attempts) : null;
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async create(user_id, quiz_id, percentage, score_count) {
    try {
      console.log('create', user_id, quiz_id, percentage, score_count);
      const query = `INSERT INTO quiz_attempts (user_id, quiz_id, percentage, score_count)
        VALUES (?, ?, ?, ?) RETURNING *`;
      const { rows: [quiz_attempts] } = await knex.raw(query, [user_id, quiz_id, percentage, score_count]);
      return new Quiz_Attempts(quiz_attempts);
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async update(user_id, quiz_id, percentage, score_count) {
    try {
      const query = `UPDATE quiz_attempts SET user_id = ?, quiz_id = ?, percentage = ?, score_count = ?
        WHERE quiz_id = ? AND user_id = ?
        RETURNING *`;
      const { rows: [quiz_attempts] } = await knex.raw(query, [user_id, quiz_id, percentage, score_count, quiz_id, user_id]);
      return new Quiz_Attempts(quiz_attempts);
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  static async getAverageQuizScore(userId) {
    try {
      const query = `
        SELECT quiz_id, AVG(percentage) AS average_percentage
        FROM quiz_attempts
        WHERE user_id = ?
        GROUP BY quiz_id;
      `;
  
      const {rows: average} = await knex.raw(query, [userId]);
      return average;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  static async deleteAll() {
    try {
      return knex('quiz_attempts').del();
    } catch(error) {
      console.log(error);
      return null;
    }
  }  

}

// const test = async () => {
//   const attempt = await Quiz_Attempts.update(13, 1, 5, 5); // Corrected method call
//   console.log("test chat model",attempt);
// };
// test();

module.exports = Quiz_Attempts;
