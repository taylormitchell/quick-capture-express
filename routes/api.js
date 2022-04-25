var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({result: 'success'});
});

router.post('/note', function(req, res, next) {
    const db = new sqlite3.Database('db/db.sqlite');
    const sql = "INSERT INTO note (text, timestamp) VALUES ($note, $timestamp)";
    const params = {$note: req.body.note, $timestamp: Date.now()};
    db.run(sql, params, (err) => {
        if (err) {
            next(err);
        } else {
            res.redirect("/");
        }
    });
});

module.exports = router;
