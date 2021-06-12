const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const mysql = require('mysql');
const { promisify } = require('util');

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'example',
  database: 'top_songsDB',
});

const query = promisify(connection.query.bind(connection))
const rows = []

fs.createReadStream(path.resolve(__dirname, 'TopSongs.csv'))
  .pipe(csv.parse({ headers: false }))
  .on('error', error => console.error(error))
  .on('data', row => rows.push(row))
  .on('end', async rowCount => {
    console.log(`Parsed ${rowCount} rows`)

    for (const row of rows) {
      console.log(row)
      // await query('INSERT INTO top5000 (position, artist, song, year, raw_total, raw_usa, raw_uk, raw_eur, raw_row) VALUES ?', row)

      await query('INSERT INTO top5000 SET ?', {
        position: row[0],
        artist: row[1],
        song: row[2],
        year: row[3],
        raw_total: row[4],
        raw_usa: row[5],
        raw_uk: row[6],
        raw_eur: row[7],
        raw_row: row[8],
      })
    }

    console.log(`Inserted rows`)
    connection.end()
  });
