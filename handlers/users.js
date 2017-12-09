'use strict';

 var usersDataHandler = require('../data/usersDataHandler');

 module.exports = {
     get: function users_get(req, res) {
         //res.json(usersDataHandler.all())
         res.header("Access-Control-Allow-Origin", "*");
         var status = 200;

         usersDataHandler.all(function (results){
            if (!results) {
                status = 404;
            }

            //console.log("status in handler: " + status);
            res.status(status).json({
                success: true,
                data: results,
                message: 'Retrieved all users'
            })
         })
     },
     post: function users_add(req, res) {
        console.log("i'm in post: users_add in users.js handler");
        console.log(req.body.username);
        console.log(req.body.screen_name);
        console.log(req.body.email);
        console.log(req.body.university);
        console.log(req.body.pword);
        console.log(req.body);

        
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
        var status = 200;

        //console.log(res.header);
        //console.log(res.header());

        usersDataHandler.add(function (results){
           if (!results) {
               status = 404;
           }
           console.log(results);

           //CODE FOR EFFECTEDROW == 0 (user already exists)
           if(results.affectedRows === 0){
            res.status(status).json({
                    success: false,
                    message: 'Username already exists!'
                })
            }
            else{
                res.status(status).json({
                    success: true,
                    data: results,
                    message: 'User was added!'
                }) 
            }

            //console.log("status in handler: " + status);
            
        }, req.body)
    }
 };
/*
 function getAllPuppies(req, res, next) {
    db.any('select * from pups')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL puppies'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }*/