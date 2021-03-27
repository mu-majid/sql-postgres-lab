/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.sql(
    `
    ALTER TABLE comments
    RENAME contents TO body;
    )
    `
  );
};

exports.down = pgm => {
  pgm.sql(
    `
    ALTER TABLE comments
    RENAME body TO contents;
    )
    `
  );
};
