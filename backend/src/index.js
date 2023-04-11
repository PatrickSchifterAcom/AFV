const express = require('express')
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser');

app.use(cors({
  origin: 'http://localhost:3000'
}));

require('dotenv').config()

const protocol = process.env.PROTOCOL || 'http'
const ip = require('ip').address()
const port = process.env.PORT || 3030

const routes = require('./routes')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes)





app.listen(port, () => console.log(
    `Server started in http://localhosto:${port} or ${protocol}://${ip}:${port}`
))