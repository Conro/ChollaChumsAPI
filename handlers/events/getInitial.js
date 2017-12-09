'use strict';
/**
 * Operations on /events/findByRadius
 */

var eventsDataHandler = require('../../data/eventsDataHandler');

module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: lat, lng, radius
     * produces: application/json, text/json
     * responses: 200
     */
    get: function events_getInitial(req, res, next) {
        console.log("in GET - getInitial handler");
        
        //res.json(usersDataHandler.all())
        res.header("Access-Control-Allow-Origin", "*");
        var status = 200;

        eventsDataHandler.getInitial(function (results){
           if (!results) {
               status = 404;
           }

           //console.log("status in handler: " + status);
           res.status(status).json({
               success: true,
               data: results,
               message: 'Retrieved initial events'
           })
        })
    },
};
