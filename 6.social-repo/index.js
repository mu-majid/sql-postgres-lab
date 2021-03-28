const app = require('./src/app.js');
const pool = require('./src/pool');


pool.connect(
  {
    host: 'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'majid',
    password: ''
  }
)
.then(() => {
  app().listen(3005, () => console.log('Listening On 3005'));
})
.catch(e => {
  console.error(e);
});
