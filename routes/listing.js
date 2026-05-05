const express = require("express");
const router = express.Router();
const wrapAsync = require("../utility/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

//combine routers
router.route("/")
// 1. index route
.get(wrapAsync(listingController.index))
// 5. create route
.post(
  isLoggedIn,
  validateListing,
  upload.single("listing[image]"),
  wrapAsync(listingController.createListing)
);

//4. new Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

// 2 combine routers
router.route("/:id")
// 3show route
.get(wrapAsync(listingController.showListing))
// 7 update route
.put(
  isLoggedIn,
  isOwner,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.updateListing)
)
// 8 delete route
.delete(
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.destroyListing)
);




//6. Edit Route
router.get(
  "/:id/edit",
  isOwner,
  isLoggedIn,
  wrapAsync(listingController.renderEditForm)
);

module.exports = router;
