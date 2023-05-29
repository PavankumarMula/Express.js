/* const http=require("http");
const express=require("express");
const bodyParser=require('body-parser');
const app=express();
const adminRoutes=require('./routes/adminRoutes');
const shopRoutes=require('./routes/shopRoutes');
const notFound=require('./routes/404notFound');
app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(notFound);

app.listen(4000, () => {
  console.log('Server started on port 4000');
});

/* Routing with express.js
app.get("/",(req,res)=>{
    res.send("<h2>Home page</h2>");
})

app.get("/about",(req,res)=>{
    res.send("<h2>About page</h2>");
})

app.get("/about-us",(req,res)=>{
    res.redirect("/about");
})

app.use((req,res)=>{
    res.send("404 not found");
})

app.use((req,res,next)=>{
    console.log("in the first midlle ware",req.url);
    next();
})

app.use("/",(req,res,next)=>{
    console.log("Inside / req")
    res.send("Home")
    
})

app.use("/add",(req,res,next)=>{
    console.log("Inside /add req")
    res.send("Add")
})*/

// app.get("/add-product",(req,res)=>{
//     res.send(`  <form method="POST" action="/product">
//     <input type="text" name="productName" placeholder="Product Name" />
//     <input type="text" name="productSize" placeholder="Product Size" />
//     <button type="submit">Add Product</button>
//   </form>`);

// });

// app.post('/product', (req, res) => {
//     console.log(req.body);
//     res.redirect('/product');
//   });

//   app.get('/product', (req, res) => {

//     res.send('Product Page');
//   });

// app.get("/",(req,res)=>{
//     console.log(req.body);
//     res.send("Hello Im Home");
// })

// Start the server  */

const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const loginRouter = require("./GroupChat.js/LoginRouter");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(loginRouter);

const chatFilePath = path.join(__dirname, "GroupChat", "chat.txt");

app.get("/", (req, res) => {
  fs.readFile(chatFilePath, "utf8", (err, data) => {
    if (err) {
      res.send("Something went wrong");
      return;
    }
    res.send(`${data}`);
  });
});

app.post("/sentMessage", (req, res) => {
  const username = req.body.username;
  const message = req.body.typeMessage;
  const data = `${username}:${message}`;

  fs.appendFile(chatFilePath, data, (err) => {
    if (err) console.log(err);
  });

  res.redirect("/");
});

// Create the chat file if it doesn't exist
fs.access(chatFilePath, fs.constants.F_OK, (err) => {
  if (err) {
    fs.writeFile(chatFilePath, "", (err) => {
      if (err) console.log(err);
    });
  }
});

// server portal
app.listen(4000, () => {
  console.log("listening to requests");
});
