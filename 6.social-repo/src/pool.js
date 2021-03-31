const pg = require('pg');

// NORMALLY, we would create a Pool and export it from this file
// But we'll not go that way for testing purposes

class Pool {
  _pool = null;

  connect(opts) {
    this._pool = new pg.Pool (opts);
    // force pool to connect to postgres
    return this._pool.query('SELECT 1 + 1;');
  }

  close() {
    return this._pool.end();
  }

  query(sql, params) {
    return this._pool.query(sql, params);
  }
}

module.exports = new Pool();