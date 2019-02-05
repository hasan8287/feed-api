require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const feedRoute = require('./feed/routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(feedRoute);

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}!`));
