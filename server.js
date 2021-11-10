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

//app.get('*', (req, res) =>
//  res.sendFile(path.join(__dirname, '/public/404.html'))
//);

//API Routes sending JSON data
  //GET api/notes
    // read db.json (you'll need fs)
    // parse into json
    // send the JSON to the front end
    // if this is working you will see notes in the app
  //POST /api/notes/ 
    // make a bear bones post /api/notes route
    // try console.log(req.body)
    // make a new object with the text and title keys
    // tack on a new id to that new object
    // read the db.json, parse it into json


  

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
