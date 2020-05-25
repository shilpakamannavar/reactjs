const fs = require("fs");
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const server = app.listen(port);
server.timeout = 1000 * 60 * 10; // 10 minutes
console.log("Book Store Server App Listening on Port 4000");

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
   
    res.header('Content-Type', 'application/json');
    next();
});

let books = "";  
//Step -1:  Read users.json file 
fs.readFile("data.json", function(err, data) {  
    // Check for errors 
    if (err) throw err; 
    // Converting to JSON 
    books = JSON.parse(data); 
    //console.log(books); // Print users  
});

app.get('/api/listbooks', (req, res) => {
    res.send(JSON.stringify(books));
});

app.get('/api/listbook/:id', (req, res) => {
    console.log("ID",req.params.id);
    let book = books.bookList.filter((item)=>{
        if(req.params.id == item.id){
            return item;
        }
    })
    res.send(JSON.stringify(book));
});


app.get('/api/listGenre', (req, res) => {
    const genres = books.bookList.map((book)=>book.genre)
                   .filter((value, index, arr) => arr.indexOf(value) === index)
    res.send(JSON.stringify(genres));
});

