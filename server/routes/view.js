const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            name: 'Siddharth Khatri',
            phone: 9416072410,
            email: 'siddxharth@gmail.com'
        },
        {
            name: 'Vedant Khatri',
            phone: 8950434367,
            email: 'vedantkhatri88@gmail.com'
        },
        {
            name: 'Mum',
            phone: 9416969794,
            email: 'mevanita1656@gmail.com',
        },
        {
            name: 'Dad',
            phone: 7988472353,
            email: 'mevirender69@gmail.com'
        }
    ]);
});

module.exports = router;