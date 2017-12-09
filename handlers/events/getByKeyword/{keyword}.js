'use strict';

var eventsDataHandler = require('../../../data/eventsDataHandler');

/**
 * Operations on /events/findByKeyword/{keyword}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: keyword
     * produces: application/json, text/json
     * responses: 200
     */
    get: function events_getByKeyword(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        console.log("in GET - getByKeyword handler");

        //res.json(usersDataHandler.all())
        res.header("Access-Control-Allow-Origin", "*");
        var status = 200;
        var keyword = req.params['keyword'];

        eventsDataHandler.keyword(function (results){
            if (!results || results.length === 0) {
                status = 404;
                res.status(status).json({
                    success: false,
                    message: 'No events found!'
                })
            }
            else {
                res.status(status).json({
                    success: true,
                    data: results,
                    message: 'Retrieved events by keyword: ' + keyword
                })
            }
        }, keyword)
    }
};
