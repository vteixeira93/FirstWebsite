const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")
const links = require("./linksdata")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
 express: server
})


server.get("/", function(req, res) {
   return res.render("index")
})
server.get("/contactme", function(req, res) {
 return res.render("contactme")
})
server.get("/links", function(req, res) {
 return res.render("links", { items: links})
})
server.get("/tutorials", function(req, res) {
 return res.render("tutorials", { items: videos })
})
server.get("/about", function(req, res) {
 return res.render("about") 
})

server.listen(5000, function(){
 console.log("Server is online")
})