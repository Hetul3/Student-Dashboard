const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const routes = require('./routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes)

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
