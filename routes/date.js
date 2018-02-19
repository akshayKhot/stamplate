var express = require('express')
var moment = require('moment')
var router = express.Router()
var db = require('../db')

router.get('/:date', (req, res) => {
    var date = moment(req.params.date).format("YYYY-MM-DD")
    res.json({
        "date": date,
        "content": "Lorem Ipsum"
    });
    // db.one(`select * from data where date='${date}'`)
    // .then(data => {
    //     res.json(data);
    // }).catch(function (error) {
    //     console.log('ERROR:', error)
    //     res.json({});
    //   });
})

router.post('/:date', (req, res) => {
    var date = moment(req.params.date).format("YYYY-MM-DD")
    res.json({
        "date": date,
        "content": "Lorem Ipsum"
    });
    // db.none(`INSERT INTO data VALUES
    // ('${date}', '${req.body.learn}', '${req.body.well}', '${req.body.diff}', ${req.body.blocks})`)
    // .then(data => {
    //     res.send("success");
    // }).catch(function (error) {
    //     console.log('ERROR:', error)
    //     res.end();
    //   });
})

router.put('/:date', (req, res) => {
    res.send("Got a Put Request");
})

router.delete('/:date', (req, res) => {
    res.send("Got a delete request");
})

module.exports = router;