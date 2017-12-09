'use strict';

var eventsDataHandler = require('../../data/eventsDataHandler');

module.exports = {
    get: function events_rsvp(req, res) {
        //res.json(usersDataHandler.all())
        res.header("Access-Control-Allow-Origin", "*");
        var status = 200;
        var user_id = req.query.userid;
        var event_id = req.query.eventid;

        console.log(user_id);
        console.log(event_id);
        
        eventsDataHandler.rsvp(function (results){
            if (!results || results.length === 0) {
                status = 404;
            }

            console.log("status in handler: " + status);
            res.status(status).json({
                success: true,
                data: results,
                message: 'Updated RSVP for user: ' + user_id + "and event: " + event_id
            })
        }, user_id, event_id)
    }
};