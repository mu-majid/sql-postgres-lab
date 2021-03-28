const pg = require('pg');

// NORMALLY, we would create a Pool and export it from this file
// But we'll not go that way for testing purposes

class Pool {
  _pool = null;

  connect(opts) {
    this._pool = new pg.Pool (opts);
  }
}

module.exports = new Pool();