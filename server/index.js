const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

const port = 3001;

db.sequelize.sync().then(
    app.listen(port, () => {
        console.log('LISTEN');
    })
);