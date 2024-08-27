/* MY CONFIGURATIONS */

const appcfg = require('./appcfg');

/* POSTGRESQL */

const Pool = require('pg').Pool;
const pool = new Pool(appcfg.pg_cfg);

/* WEB APPLICATION *//* MY CONFIGURATIONS */

const express = require('express');
const app = express();
app.use(express.json());
app.use('/', express.static(appcfg.Project_Root));
app.use('/assets', express.static(appcfg.Project_Root + '/client/dist/assets'));
const port = 3001;
app.get('/', (req, res) => {
  res.status(200).sendFile(
    'client/dist/index.html',
    { root: appcfg.Project_Root });
});

    
app.post('/', (req, res) => {
  console.log('Request.BODY: ', req.body);
  res.status(200);
  console.log('Пошёл запрос к БД');
  pool.query(
    'SELECT length from snake',
    (error, results) => {
        if (error) {
            console.log(error)
        }
        console.log(
          'Пришёл ответ из БД: ',
          results.rows);
        res.setHeader(
          'Content-Type',
          'application/json');
          /* res.end(JSON.stringify(
            {length: results.rows})); */
          res.end(JSON.stringify(
              {length: 5}));
    });
  console.log('А сервер не ждёт!');
});


app.listen(port, () => {
  console.log(`http://127.0.0.1:${port}.`)
});