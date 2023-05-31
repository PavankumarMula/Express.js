const express=require('express');
const fs = require('fs');
const path=require('path');
const ProductClass = require('../models/productModel');

// home page controller 
exports.homePage = (req, res) => {
  const homePageFilePath = path.join(__dirname, '../', 'views', 'home.html');

  fs.readFile(homePageFilePath, 'utf8', (err, content) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.send(content);
  });
};

//add prooducts ans post them to another url
exports.addProduct=(req,res)=>{

  //path of the file you want send when user hit add-product url
  const addProductFile=path.join(__dirname,"../","views",'addproduct.html');

  //read file before sending it to url
  fs.readFile(addProductFile,"utf-8",(err,data)=>{
    if(err){
      console.log(err);
      res.status(500).send("internal error")
      return;
    }
    res.send(data);
  })
}


//product post method controller
exports.postProduct=(req,res)=>{
    const newproduct=new ProductClass(req.body);
    newproduct.save();
    res.redirect("/");
}


// Show products on the home page

exports.showProducts = (req, res) => {
  const allProducts = ProductClass.fetchAll();

  // You can modify this part to display the products in the desired format
  let productListHTML = '<h1>Product List</h1>';
  productListHTML += '<ul>';
  allProducts.forEach((product) => {
    productListHTML += `<li>${product.productname}</li>`;
  });
  productListHTML += '</ul>';

  res.send(productListHTML);
};

