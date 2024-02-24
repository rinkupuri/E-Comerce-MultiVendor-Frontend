const { isSellerAuthenticated } = require("../middleware/auth");
const Event = require("../models/Event");
const ErrorHandler = require("../utilities/ErrorHandler");
const router = require("express").Router();

router.post("/create", isSellerAuthenticated, async (req, res, next) => {
  try {
    const eventCreate = await Event.create(req.body);
    res.status(200).json({
      success: true,
      message: "Event Created Succesfuly",
      EventData: eventCreate,
    });
  } catch (error) {
    next(new ErrorHandler(error, 500));
  }
});

module.exports = router;
