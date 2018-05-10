'use strict';

const jsonParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').load();
mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI);
require('./server/lib/server.js').start();
