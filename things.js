var express = require("express");
var router = express.Router();

router.get("/:film", function (req, res) {
  const query = "select * from film ";
});

// export router ini untuk digunakan di index.js
module.exports = router;
