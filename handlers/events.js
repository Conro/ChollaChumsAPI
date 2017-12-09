'use strict';
/**
 * Operations on /events
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: 
     * produces: application/json, text/json
     * responses: 200
     */
    get: function events_getAll(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        console.log("in GET - events handler");
    },
    
    post: function events_add(req, res, nest){
        console.log("in POST - events handler");
    }
};
