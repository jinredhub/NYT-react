const db = require("../models");
const router = require("express").Router();
var express = require("express");


  // router.get("/articles", function(req, res){
  //   console.log("GET Route: articles!!!");
  //   db.Article.find({})
  //     .then(function(db){
  //       console.log(res);
  //       res.json(db)
  //     }).catch(function(err){
  //       res.status422.json(err);
  //     });
  // })

  router.post("/articles", function(req, res){
    console.log("Route: POST articles!!!");
    console.log(req.body);
    db.Article
      .create(req.body)
      .then(function(db){
        res.json(db)
      }).catch(function(err){
        res.status422.json(err);
      });
  })


module.exports = router;

// Defining methods for the booksController
// module.exports = {


  // findAll: function(req, res) {
  //   db.Book
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Book
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // create: function(req, res) {
  //   db.Book
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // update: function(req, res) {
  //   db.Book
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Book
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
// };
