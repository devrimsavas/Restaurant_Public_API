var express = require("express");
var router = express.Router();

const createMultipleOrders = require("../data/createRandomOrder.js");

// Route to handle `/` or `/number`
router.get("/:maxOrder?", (req, res) => {
  let maxOrder = parseInt(req.params.maxOrder);

  if (!maxOrder || isNaN(maxOrder)) {
    return res.json({
      message: "Welcome to the Pizza Order API!",
      writer: "written by devrim yilmaz",

      usage:
        "To use this API, add '/number' to the URL to generate that many pizza orders. For example, /5 will return 5 random pizza orders.",
    });
  }

  const orders = createMultipleOrders(maxOrder);
  return res.json({
    maxOrder: maxOrder,
    orders: orders,
  });
});

module.exports = router;
