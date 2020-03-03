var express = require('express');
var router = express.Router();
var where = require('../models/where');
var elem_styles = require('../models/elem_styles');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "barryrussellnet.database.windows.net",
  user: "lbits",
  password: "jamroc09!",
  database: "BarryRussellNet",
  port: 1433,
  ssl: true
});

connection.connect(
  function(err) {
    if (err) {
      console.log("!!!Cannot Connect!!!");
      throw err;
    }
    else {
      console.log('Established connection');
      queryDatabase();
    }
});

function queryDatabase() {
  connection.query('select * from timeline', function(err, results, fields) {
    if (err) throw err;
    console.log(JSON.stringify(results));
  })
}

var foo = where.prototype;
var bar = elem_styles.prototype;

foo.date = 'April 2019 - present';
foo.icon = 'dollar.svg';
foo.skillsArr = ['PowerOn', 'SQL', 'Symitar', 'OpCon Automation']
foo.subtitle = 'Fortera Credit Union';
foo.title = 'Systems Analyst';
foo.logo = 'fortera.png'

bar.contentBack = 'rgba(111, 199, 174, 0.6)';
bar.contentBackImg = 'fortera-back.png';
bar.contentColor = '#fff';
bar.iconBackground = '#6fc7ae';
bar.iconColor = '#fff';

foo.styles = bar;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json([foo]);
  console.log(foo);
});

connection.end();

module.exports = router;
