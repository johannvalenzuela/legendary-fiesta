const { request, response } = require('express');
const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/add', (req,res) => {
    res.render('admin/hora');
});

router.post('/add', (req,res) => {
    res.send('creada')
});

module.exports = router;