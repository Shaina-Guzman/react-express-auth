const knex = require('../knex');

class Quizzes {

  constructor({ id, topic , url}) {
    this.id = id;
    this.topic = topic;
    this.url = url;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM quizzes';
      const { rows } = await knex.raw(query);
      return rows.map((quizzes) => new Quizzes(quizzes));
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM quizzes WHERE id = ?';
      const { rows: [quizzes] } = await knex.raw(query, [id]);
      return quizzes ? new Quizzes(quizzes) : null;
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async create(topic, url) {
    try {
      const query = `INSERT INTO quizzes (topic, url)
        VALUES (?, ?) RETURNING *`;
      const { rows: [quizzes] } = await knex.raw(query, [topic, url]);
      return new Quizzes(quizzes);
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  
  static async deleteAll() {
    try {
      return knex('quizzes').del();
    } catch(error) {
      console.log(error);
      return null;
    }
  }  

}

module.exports = Quizzes;
