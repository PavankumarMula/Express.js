const express = require("express");
const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send(`
        <html>
         <body>
          <div class="form" style="display: flex; justify-content: center;">
            <form action="/product" method="POST">
                <input type="text" name="product name">
                <input type="number" name="size" >
                <button type="submit">Submit</button>
            </form>
          </div>
         </body>
        </html>
    `);
});

//when the user fillup the form submit the form data will come to /product url then it will 
// redirect to home page "/" so it is post method cause user is sending form data to "/product"
router.post('/product',(req,res)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports = router;