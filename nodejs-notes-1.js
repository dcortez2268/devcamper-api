// What is Node?  Javascript runtime, not a language or a framework, essentially allows us to run js code on the server

// Why use Node? 
// fast, efficient, and highly scalable, due to ist event driven, non-blocking I/O model
// popular in the industry

// What is the non-blocking I/O model?
// works on a single thread using non-blocking I/O calls, it optimizes throughput and scalability in apps with many io operations

// What is it good for and not good for?
// It is not good for cpu intensive apps, however it is good for pretty much anything else, great for rest api and microservices, real time services, crud apps, tools and utilities

// What is NPM?
// Node package manager, it is the package manager for js programming language.  
node_modules // this folder stores packages
package.json // all dependencies are listed in this file
npm init // initializes package.json file
npm scripts // can be created to run certain tasks such as run a server
npm install // installs all packages listed in package.json
npm install packageName // installs packageName

// What are modules?
// there are core modules, 3rd party modules/packages installed via NPM, and custom modules(files you create), allow you to include code in a file you export from another file
// commonjs syntax
const path = require("path")
const myFile = require("./myFile")

// some core modules: path, fs, os, url, http

EventEmitter // all classes that emit events are child classes of the EventEmitter class, cause listener functions to fire off

// What is HTTP? 
// hypertext transfer protocol, it allows communication from clients and web servers, implements requests/responses, and included header and body

//Restful api standards

// INSTALLS
npm i express // express framework
npm i dotenv // environment variables
npm i -D nodemon // hot reload changes without having to restart server manually
npm i morgan // third party middleware logger
npm i mongoose // mongoose
npm i colors // allows us to output diff color text in the console
npm i slugify // allows us create slugs in mongodb model
npm i node-geocoder // allows us to geocode addresses given via input string
npm i express-fileupload // allows us to upload files
npm i jsonwebtoken // allows us to use and send json web tokens
npm i bcryptjs // allows us to decrypt/encrypt json web token
npm i cookie-parser // allows us to send jwt in cookie
npm i node-mailer // allows us to send emails from our project


// Route structures for this API
// GET POST PUT DELETE methods for following resources:
/api/v1/bootcamps
/api/v1/courses
/api/v1/reviews
/api/v1/auth
/api/v1/users
//good idea to version like this

// What is middleware?
// middleware is a function that has access to request/response cycle (the req, res variables)
// all middleware functions take in (req, res, next) arguments
// you can add properties/methods on the req object that can be accessed by any routes
// call next() at end of middleware function
// middleware is run for every api call made to any route if you use app.use(middlewareHere)

// POSTMAN
// collection:
// environment:

// MongoDB Atlas: MongoDB in the cloud as opposed to being installed locally
// Compass: desktop application that you can use to access and update your MongoDB databases

// Mongoose: ODM library for MongoDB and node.js, has models, validation, easy manipulation of data with methods, in built middleware

// flow of routes: 
// server.js file mounts router, router lists routes and calls functions that are located in controller file

// models: constructors of a schema that creates an document instance, has models, fields, validation, middleware(hooks)

app.use(express.json()) // include in server.js to be able to access req.body within our code

// to build relationship among models you need to include these fields where Course is Model that contains a bootcamp
bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bootcamp',
    required: true,
}

//resource router: is how you implement routes like // @route   GET /api/v1/bootcamps/:bootcampId/courses in courses controller, you could also import function from courses controller into bootcamps router but not good practice 

// mongoose virtuals: document properties that you can get and set but that do not get persisted to MongoDB

// mongoose statics: static methods on the model

// mongoose pipeline: 
// mongoose index: 

// storing jwt token in local storage on browser can lead to security issues so instead send jwt token in a cookie
// cookie: 
// httponly
// secure flag sends cookie with https

// implemented shortcut to automatically submit token of logged in user to postman environment variable, and access via other routes {{token}} instead of manually having to enter logged in user token
//under test tab of log in route input this code
pm.environment.set("TOKEN", pm.response.json().token)













