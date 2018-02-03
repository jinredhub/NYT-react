const db = require("../models");
const router = require("express").Router();
var express = require("express");


  // load-Saved-Articles
  router.get("/articles", function(req, res){
    console.log("GET Route: articles!!!");
    db.Article.find({})
      .then(function(db){
        console.log(res);
        res.json(db)
      }).catch(function(err){
        res.status422.json(err);
      });
  })

  // save-article
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

  // delete-article
  router.delete("/articles/:snippet", function(req, res){
    console.log("Route: DELETE articles!!!");
    console.log(req.params.snippet);
    db.Article
      .remove(
          {title: req.params.snippet}
        )
      .then(function(db){
        res.json(db)
      }).catch(function(err){
        res.status422.json(err);
      });
  })

module.exports = router;
