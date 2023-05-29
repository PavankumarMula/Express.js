const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.send(
    `<html>
     <body>
     <form action="/" method="POST" id="form">
     <label>Enter Username</label><br/>
     <input type="text" name="username" >
     <button type="submit">submit</button>
     </form>
     <script>
     document.getElementById('form').addEventListener('submit', () => {
        
         const message = document.querySelector('input[name="username"]').value;
         const jsonMessage = JSON.stringify(message);
         localStorage.setItem('username', message); 
     });
     </body>
     </html>`
  );
});

module.exports = router;

