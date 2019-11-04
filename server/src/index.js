const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const models = require('./models');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    req.context = {
        models,
    };
    next();
});

// Routes
app.use('/cards', routes.cards);

app.listen(port, () => console.log(`Listening on port ${port}`));