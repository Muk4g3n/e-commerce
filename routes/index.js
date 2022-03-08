const router = require("express").Router();
const Item = require("../models/Item");
const { ensureAuth } = require("../config/auth");

//homapage route
router.get("/", (req, res) => {
  Item.find()
    .then((products) => {
      res.render("homepage", { products });
    })
    .catch((err) => console.log(err));
});
router.get("/about", (req, res) => {
  console.log("about page");
});

router.get("/terms", (req, res) => {
  console.log("terms page");
});


//item route
router.get("/product/:id", (req, res) => {
  Item.findOne({ _id: req.params.id })
    .then((newProduct) => {
      if (newProduct) {
        res.render("item", { newProduct });
      } else {
        res.redirect("/");
      }
    })
    .catch((err) => console.log(err));
});


module.exports = router;
