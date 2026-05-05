#  WonderLust

WonderLust is a full-stack web application where users can explore, create, and review rental properties.
It is inspired by platforms like Airbnb and built to understand real-world web development concepts.

---

##  Live Demo

🔗 https://your-deployed-link.onrender.com

---

##  Features

* Browse all property listings on the homepage
* Create your own listing with details and images
* Edit and delete your own listings
* View full details of each property
* Add reviews and ratings
* User signup and login system
* Upload images while creating listings
* Only the owner can edit or delete their listing

---

##  Tech Stack

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, Bootstrap, CSS
* **Database:** MongoDB, Mongoose
* **Authentication:** Passport.js, Express Session
* **Image Upload:** Cloudinary, Multer
* **Maps:** Mapbox / Leaflet

---

## 📁 Project Structure

```
WonderLust/
├── models/
│   ├── listing.js
│   ├── user.js
│   └── review.js
│
├── controllers/
│   ├── listing.js
│   ├── user.js
│   └── review.js
│
├── routes/
│   ├── listing.js
│   ├── user.js
│   └── review.js
│
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── listings/
│   │   ├── index.ejs
│   │   ├── show.ejs
│   │   ├── new.ejs
│   │   └── edit.ejs
│   │
│   ├── users/
│   │   ├── signup.ejs
│   │   └── login.ejs
│   │   └── error.ejs
│   └── includes/
│       ├── navbar.ejs
│       └── footer.ejs
│       └── flash.ejs
├── public/
│   ├── css/
│   ├── js/
│
├── init/
│   ├── data.js
│   └── index.js
│
├── utility/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── middleware.js
├── app.js
├── package.json
├── .env
└── README.md
```


---

##  Run Locally

### 1. Clone the project

```
git clone https://github.com/your-username/WonderLust.git
cd WonderLust
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Create `.env` file

```
MONGODB_URI=your_mongodb_connection_string
SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
MAP_TOKEN=your_map_token
```

---

### 4. Start server

```
npm run dev
npm start
```

 Open in browser: http://localhost:8080

---

## How It Works

### Create Listing

Logged-in users can add new properties with details and images.

### Reviews

Users can add reviews and ratings to listings.

### Authentication

* Login required to create listings or reviews
* Only the owner can edit/delete/update their listing

---

## Deployment

* Hosted on **Render**
* Database: **MongoDB Atlas**
* Images: **Cloudinary**

---

## Author

**Firdosh Alam**

* GitHub: https://github.com/your-username
* LinkedIn: https://linkedin.com/in/your-profile

---
