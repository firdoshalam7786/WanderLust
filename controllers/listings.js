const Listing = require("../models/listing.js");

// Map getCoordinates 
const getCoordinates = async (location, country) => {  
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${location},${country}&apiKey=${process.env.MAP_TOKEN}`
  );
  const data = await response.json();
  return data.features[0].geometry;
};

// index controller
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

// new route
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

// Show route
module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
  if (!listing) {
    req.flash("success", "Listing Does Not Exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

// create route
module.exports.createListing = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  //location
  newListing.geometry = await getCoordinates(
    newListing.location,
    newListing.country
  );
  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

// edit route
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("success", "Listing Does Not Exist!");
    res.redirect("/listings");
  }
  let originalImageUrl = listing.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing, originalImageUrl });
};

//Update router
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });

   // location
  listing.geometry = await getCoordinates(
    req.body.listing.location,
    req.body.listing.country
  );

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }
  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${listing._id}`);
};

// destroy / delete listing
module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  let deleteLinting = await Listing.findByIdAndDelete(id);
  // console.log(deleteLinting);
  req.flash("success", "New Listing Created!");
  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
