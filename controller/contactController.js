const path=require('path');
const fs=require('fs');

exports.contact=(req,res)=>{
  const contactFile=path.join(__dirname,'../','views','Contact.html');

  fs.readFile(contactFile,"utf-8",(err,data)=>{
    if(err){
      res.status(500).send("internal error while reading");
      return;
    }
    res.send(data);
  })
}