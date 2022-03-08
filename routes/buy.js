const router = require("express").Router();
const Item = require("../models/Item");
const { ensureAuth } = require("../config/auth");


router.get("/cart",ensureAuth,(req,res)=>{
    console.log("cart");
});
router.get("/paiment",ensureAuth,(req,res)=>{
    console.log("paiment");
});
router.get("/shipping",ensureAuth,(req,res)=>{
    console.log("shipping");
});
router.get("/confirmation",ensureAuth,(req,res)=>{
    console.log("confirmation");
});
router.get("/paimentSettings",ensureAuth,(req,res)=>{
    console.log("paimentSettings");
});
router.get("/Thankyou",ensureAuth,(req,res)=>{
    console.log("Thank you for buying");
});