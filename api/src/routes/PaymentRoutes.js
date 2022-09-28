const { Router } = require("express");
const {
  createOrder,
  cancelOrder,
  captureOrder,
} = require("../controllers/PaymentsControllers");

const router = Router();

router.post("/create-order", createOrder);
router.get("/cancel-order", cancelOrder);
router.get("/capture-order", captureOrder);

module.exports = router;
