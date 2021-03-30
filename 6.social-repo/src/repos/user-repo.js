const pool = require('../pool');

class UserRepo {
  static async find() {
    const { rows } = await pool.query('SELECT * FROM users;');

    const parsedRows = rows.map(row => {
      const replaced = {};

      for (const key in row) {
        const camelCase = key.replace(/([-_][a-z])/gi, (group) => {
          group.toLocaleUpperCase().replace('_', '');
        });
        replaced[camelCase] = row[key];
      }

      return replaced;
    });

    return parsedRows;
  }

  static async findById() {}

  static async insert() {}

  static async update() {}

  static async delete() {}
}

module.exports = UserRepo;
