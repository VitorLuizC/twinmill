'use strict';

const express = require('express');

const app = express();

app.use('/', express.static('./app'));

app.listen(9001);
