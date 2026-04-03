const express = require("express");
const request = require('request');
const path = require('path');

const dtrue = true;

var StackArray = require('./stack.js');

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/public', express.static(path.join(__dirname, '/static')))
//app.use(express.static('public'));
app.set("view engine", "ejs");

var mstack = new StackArray();

// Main page
app.get('/', function(req, res){
    
    site = 'http://cs.science.swu.ac.th/';
    //site = 'https://techcrunch.com/';
    apiurl = site+"wp-json/wp/v2/posts?per_page=10&context=embed";
    
    request(apiurl, { json: true }, (rerr, rres, body) => {
      if (rerr) { return console.log(rerr); }
      console.log(body[0].title);
      
      for(var i=0; i < body.length; i++){
        item = {
          id : body[i].id,
          rendered: body[i].title.rendered,
          len: body[i].title.rendered.length
        }
        mstack.push(item);
      }

      // render with ejs
      res.render("index", {
        data: body,
        maxdata: mstack.getMax(),
        mindata: mstack.getMin(),
        dstack: dtrue
      });
  
    });
  
  

  app.get('/pop', function(req, res){

     console.log("pop");


     myitems = [];
     item = mstack.pop();
     while(mstack.size() > 0){
      item = mstack.pop();
      myitems.push(item);
     }
    
      res.render("poppage", {
        data: myitems,
        maxdata: mstack.getMax(),
        mindata: mstack.getMin(),
        dstack: dtrue
      });
  
    });
  
  });


  app.listen(8080, function () {
    console.log("Server is running on port 8080 ");
  });
  