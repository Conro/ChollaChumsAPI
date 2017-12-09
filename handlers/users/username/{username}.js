'use strict';

var usersDataHandler = require('../../../data/usersDataHandler');

module.exports = {
    get: function users_getByUsername(req, res) {
        //res.json(usersDataHandler.all())
        res.header("Access-Control-Allow-Origin", "*");
        var status = 200;
        var username = req.params['username'];

        console.log(req.params['username']);

        usersDataHandler.username(function (results){
            if (!results || results.length === 0) {
                status = 404;
                res.status(status).json({
                    success: false,
                    message: 'Username not found!'
                })
            }

            console.log("status in handler: " + status);
            res.status(status).json({
                success: true,
                data: results,
                message: 'Retrieved data (by username) for user: ' + username
            })
        }, username)
    }
};