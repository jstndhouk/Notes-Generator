//Requires express, the notes route, and the api route.
const express = require('express');
const htmlNotes = require('./routes/notes');
const api = require('./routes/api');

//Requires middleware and path
const path = require('path');
const { clog } = require('./middleware/clog');
const PORT = process.env.PORT || 3001;

const app = express();


app.use(clog);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'))

app.use('/', htmlNotes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
