const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

app.use(cors());
app.use(morgan('tiny'));
app.use('/worksheets', routes);

app.listen(PORT, console.log(`Server running on PORT ${PORT}`));