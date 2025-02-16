const db = require('../../database');

class CategoriesRepository {
  async findAll() {
    return await db.query(`SELECT * FROM categories ORDER BY name`);
  }
  
  async create({ name }) {
    const [row] = await db.query(`
      INSERT INTO categories(name)
      VALUES($1)
      RETURNING *  
    `, [name]);

    return row;
  }
}

module.exports = new CategoriesRepository();
