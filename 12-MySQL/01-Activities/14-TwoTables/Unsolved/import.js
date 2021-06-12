const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const mysql = require('mysql');

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

const rows = []

fs.createReadStream(path.resolve(__dirname, 'TopAlbums.csv'))
  .pipe(csv.parse({ headers: false }))
  .on('error', error => console.error(error))
  .on('data', row => rows.push(row))
  .on('end', async rowCount => {
    console.log(`Parsed ${rowCount} rows`)

    connection.query(
      'INSERT INTO top_albums (position, artist, album, year, raw_total, raw_usa, raw_uk, raw_eur, raw_row) VALUES ?',
      [rows],
      (err, result) => {
        connection.end()
        console.log('Inserted rows')
      },
    )
  });
