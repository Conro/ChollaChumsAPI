'use strict';
var Mockgen = require('../../mockgen.js');
/**
 * Operations on /users/username/{username}
 */
module.exports = {
    /**
     * summary: 
     * description: 
     * parameters: username
     * produces: application/json, text/json
     * responses: 200
     * operationId: users_getByUsername
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/users/username/{username}',
                operation: 'get',
                response: '200'
            }, callback);
        }
    }
};
