const express = require("express");
const request = require('request');
const path = require('path');

const dtrue = false;


var StackArray = require('./stack.js');

app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/public', express.static(path.join(__dirname, '/static')))
//app.use(express.static('public'));
app.set("view engine", "ejs");

// Main page
app.get('/', function(req, res){
    var mstack = new StackArray();
    site = 'http://cs.science.swu.ac.th/';
    //site = 'https://techcrunch.com/';
    apiurl = site+"wp-json/wp/v2/posts?per_page=10&context=embed";
    
    request(apiurl, { json: true }, (rerr, rres, body) => {
      if (rerr) { return console.log(rerr); }
      console.log(body[0].title); 
          
      // push data to stack to compute max/min
      for(var i=0; i < body.length; i++){
        mstack.push(body[i].title.rendered.length)
      }
      
      // render with ejs
      res.render("index", {
        data: body,
        maxdata: mstack.getMax(),
        mindata: mstack.getMin(),
        dstack: dtrue
      });
  
    });
  
  });

  app.post('/result', function(req, res){
    //var unit = JSON.stringify(req.body.unit);
    var mstack = new StackArray();
    console.log(req.body.urlstr);
    var site = req.body.urlstr;
    apiurl = site+"wp-json/wp/v2/posts?per_page=10&context=embed";
    request(apiurl, { json: true }, (rerr, rres, body) => {
      if (rerr) { return console.log(rerr); }
      console.log(body[1].title); 
      console.log(body[1].link);
      console.log(body[1].id);
      
      var obj;
  
      for(var i=0; i < body.length; i++){
        mstack.push(body[i].title.rendered.length)
      }
      
      res.render("index", {
        data: body,
        maxdata: mstack.getMax(),
        mindata: mstack.getMin(),
        dstack: dtrue
      });
  
    });
  
  });
  


  app.listen(8080, function () {
    console.log("Server is running on port 8080 ");
  });
  