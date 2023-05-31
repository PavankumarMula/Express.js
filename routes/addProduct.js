const express=require('express');
const router=express.Router();
const addproductController=require('../controller/productcontroller');
const postProductController=require("../controller/productcontroller");

router.get('/add-product',addproductController.addProduct);
router.post('/submit-product',postProductController.postProduct);

module.exports= router;