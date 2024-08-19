/* POSTGRESQL */

const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'tutor',
  host: 'localhost',
  database: 'academy_top',
  port: 5432,
});

pool.query(
    'SELECT * from student',
    (error, results) => {
        if (error) {
            console.log(error)
        } 
        console.log(results.rows);
    });

/* WEB APPLICATION */
const express = require('express');
const app = express();
app.use('/',
    express.static('D:/VM Shared/org/itstep/js/nodejs/reactjs/snake/server/'));
const port = 3001;
    
app.get('/', (req, res) => {
  res.status(200).sendFile('index.html');
});

    
app.post('/', (req, res) => {
  res.status(200);
  res.setHeader(
    'Content-Type',
    'application/json');
  res.end('{"length":5}');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
});