require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("../init/data.js");
const Listing = require("../models/listing.js");


// const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const dbUrl = process.env.ATLAS_URL;

main()
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(dbUrl);
};


const initDb = async () =>{
    await Listing.deleteMany({});
     initData.data = initData.data.map((obj)=>({...obj, owner:'69f9f2f9abcf652a681cf6ec'}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
    
}

initDb();
