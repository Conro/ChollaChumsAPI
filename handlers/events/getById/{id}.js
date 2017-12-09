'use strict';

var eventsDataHandler = require('../../../data/eventsDataHandler');
/**
 * Operations on /events/findById/{id}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: id
     * produces: application/json, text/json
     * responses: 200
     */
    get: function events_getById(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        console.log("in GET - getById handler");
        


        //res.json(usersDataHandler.all())
        res.header("Access-Control-Allow-Origin", "*");
        var status = 200;
        var id = req.params['id'];


        eventsDataHandler.id(function (results){
            if (!results || results.length === 0) {
                status = 404;
                res.status(status).json({
                    success: false,
                    message: 'Event not found!'
                })
            }

            console.log("status in handler: " + status);
            res.status(status).json({
                success: true,
                data: results,
                message: 'Retrieved event data (by id): ' + id
            })
        }, id)
    }
};
