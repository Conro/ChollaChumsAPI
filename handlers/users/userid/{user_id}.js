'use strict';

var usersDataHandler = require('../../../data/usersDataHandler');

module.exports = {
    get: function users_getById(req, res) {
        //res.json(usersDataHandler.all())
        res.header("Access-Control-Allow-Origin", "*");
        var status = 200;
        var user_id = req.params['user_id'];

        console.log(user_id);

        usersDataHandler.id(function (results){
            if (!results || results.length === 0) {
                status = 404;
            }

            console.log("status in handler: " + status);
            res.status(status).json({
                success: true,
                data: results,
                message: 'Retrieved data (by user_id) for user: ' + user_id
            })
        }, user_id);
    }
};