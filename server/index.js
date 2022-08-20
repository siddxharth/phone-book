const express = require('express');
const app = express();
const users = require('./routes/view.js');
const cors = require('cors');

app.use('/view', users);

app.use(cors());

app.use('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(3001); 