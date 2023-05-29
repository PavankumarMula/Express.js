const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const Shop=require('./routes/shopRoutes');

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(Shop);
 
//showing user a form to fill up the data
app.get('/contact',(req,res)=>{
  const filePath=path.join(__dirname,"./","Data","Contact.html");
  res.sendFile(filePath);
})

//redirectiring the user to "/sucess url"
app.post('/submit',(req,res)=>{
  console.log(req.body);
  res.redirect("/sucess");
})

//showing the user a sucess message
app.get("/sucess",(req,res)=>{
  res.send("Form Submitted Sucessfully");
})

//sending error message to user if he hits random url
app.use((req,res)=>{
  const filePath=path.join(__dirname, "./",'Data', '404Error.html');
  res.status(404).sendFile(filePath);
})

// server portal
app.listen(4000, () => {
  console.log("listening to requests");
});
