const router = require("express").Router();
const Item = require("../models/Item");
const { ensureAuth } = require("../config/auth");


router.get("/espaceAdmin",ensureAuth,(req,res)=>{
    console.log("espaceAdmin");
});

router.get("/addproduct", ensureAuth, (req, res) => {
    res.render("addproduct");
  });


router.post("/addproduct", (req, res) => {
    const { name, description, price } = req.body;
    const newProduct = new Item({ name, description, price });
    newProduct
      .save()
      .then((product) => {
        res.render("item", { newProduct });
      })
      .catch((err) => console.log(err));
  });