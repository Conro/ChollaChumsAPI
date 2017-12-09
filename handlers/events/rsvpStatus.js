'use strict';

var eventsDataHandler = require('../../data/eventsDataHandler');

module.exports = {
    get: function events_rsvpStatus(req, res) {
        //res.json(usersDataHandler.all())
        res.header("Access-Control-Allow-Origin", "*");
        var status = 200;
        var user_id = req.query.userid;
        var event_id = req.query.eventid;

        console.log(user_id);
        console.log(event_id);
        
        eventsDataHandler.rsvpStatus(function (results){
            if (!results || results.length === 0) {
                //status = 404;
                res.status(status).json({
                    success: false,
                    data: results,
                    message: 'UserId: ' + user_id + ' not attending eventId: ' + event_id 
                })
            }
            else{
                console.log("status in handler: " + status);
                res.status(status).json({
                    success: true,
                    data: results,
                    message: 'UserId: ' + user_id + ' is attending eventId: ' + event_id 
                })   
            }

            
        }, user_id, event_id)
    }
};