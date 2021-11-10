const fs = require('fs');
const util = require('util');
const uuid = require('../public/assets/uuid');


const readFromFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const router=require('express').Router();
const path = require('path');
const notesData = require('../db/db.json');

//Get route for the notes data
router.get('/notes', (req, res) => {
res.json(notesData)
})

router.post('/notes', (req, res) => {
//Pushes the new data in the request body, into the array est. in line 10
let reqBody=req.body;
reqBody.id=uuid();
notesData.push(reqBody)
//Writes the file (second argument) found in the first arguement
writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notesData))
//Then console logs that data and response with the request body
.then(data=>{console.log(data)})
res.json(req.body)
})

module.exports = router;