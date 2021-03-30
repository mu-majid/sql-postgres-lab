module.exports = (rows) => {
  return rows.map(row => {
    const replaced = {};

    for (const key in row) {
      const camelCase = key.replace(/([-_][a-z])/gi, (group) => {
        group.toLocaleUpperCase().replace('_', '');
      });
      replaced[camelCase] = row[key];
    }

    return replaced;
  });
}