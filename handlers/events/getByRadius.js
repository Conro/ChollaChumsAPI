'use strict';
/**
 * Operations on /events/findByRadius
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: lat, lng, radius
     * produces: application/json, text/json
     * responses: 200
     */
    get: function events_getByRadius(req, res, next) {
        console.log("in GET - findByRadius handler");
        console.log(req.query.lat);
        console.log(req.query.lng);
        console.log(req.query.radius);
    }
};
