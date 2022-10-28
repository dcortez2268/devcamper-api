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






