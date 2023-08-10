const knex = require('../knex');
const { hashPassword, isValidPassword } = require('../../utils/auth-utils');

class User {
  #passwordHash = null; // a private property

  constructor({ id, username, password_hash }) {
    this.id = id;
    this.username = username;
    this.#passwordHash = password_hash;
  }

  static async list() {
    try {
      const query = 'SELECT * FROM users';
      const { rows } = await knex.raw(query);
      return rows.map((user) => new User(user));
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async find(id) {
    try {
      const query = 'SELECT * FROM users WHERE id = ?';
      const { rows: [user] } = await knex.raw(query, [id]);
      return user ? new User(user) : null;
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async findByUsername(username) {
    try {
      const query = 'SELECT * FROM users WHERE username = ?';
      const { rows: [user] } = await knex.raw(query, [username]);
      return user ? new User(user) : null;
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async create(username, password) {
    try {
      const passwordHash = await hashPassword(password);
      const query = `INSERT INTO users (username, password_hash)
        VALUES (?, ?) RETURNING *`;
      const { rows: [user] } = await knex.raw(query, [username, passwordHash]);
      return new User(user);
    } catch(error) {
      console.log(error);
      return null;
    }
  }

  static async deleteAll() {
    try {
      return knex('users').del();
    } catch(error) {
      console.log(error);
      return null;
    }
  }  

  update = async (username) => { // dynamic queries are easier if you add more properties
    try {
      const query = `UPDATE users SET username = ? WHERE id = ? RETURNING *`;
      const { rows: [user] } = await knex.raw(query, [username, this.id]);
      return new User(user);
    } catch(error) {
      console.log(error);
      return null;
    }
  };

  isValidPassword = async (password) => (
    isValidPassword(password, this.#passwordHash)
  );
}

module.exports = User;
