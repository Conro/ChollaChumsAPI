'use strict';

var db = require('../lib/db');

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
     * operationId: events_getAll
     */
    id: function (callback, id) {
        var status = "";
        
        console.log("Calling 'id' in data/eventsDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query('SELECT * FROM `events` WHERE `event_id` = ?', [id], function (error, results, fields) {
                console.log("query ran");
                // And done with the connection.
                connection.release();
            
                // Handle error after the release.
                if (error) throw error;
        
                //console.log(results);

                if(results.length === 1)
                    callback(results);
                else {
                    callback(undefined)
                }
            
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    },
    getInitial: function (callback) {
        
        var status = "";

        console.log("Calling 'all' in data/usersDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query('SELECT * FROM events\
            WHERE DATE(date) = curdate()\
            AND university = \'Arizona State University\';', function (error, results, fields) {
                console.log("query ran");
                // And done with the connection.
                connection.release();
            
                // Handle error after the release.
                if (error) throw error;
        
            //console.log(results);
            if(results.length !== 0)
                callback(results);
            else {
                callback(undefined)
            }
            
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    },
    rsvp: function (callback, userid, eventid) {

        var status = "";

        console.log("Calling 'rsvp' in data/usersDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query('call SetAttending(?,?,@output);', [userid, eventid], function (error, results, fields) {
                console.log("query ran");
                // And done with the connection.
                connection.release();
            
                // Handle error after the release.
                if (error) throw error;
        
                //console.log(results);
                if(results.length !== 0)
                    callback(results[0][0]);
                else {
                    callback(undefined)
                }
            });
        });
    },
    rsvpStatus: function (callback, userid, eventid) {

        var status = "";

        console.log("Calling 'rsvp' in data/usersDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query('SELECT * FROM user_event WHERE user_id = ? AND event_id = ?', [userid, eventid], function (error, results, fields) {
                console.log("query ran");
                // And done with the connection.
                connection.release();
            
                // Handle error after the release.
                if (error) throw error;
        
                //console.log(results);
                if(results.length !== 0)
                    callback(results);
                else {
                    callback(undefined)
                }
            
            
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    },
    attendees: function (callback, eventid) {
        
        var status = "";

        console.log("Calling 'attendees' in data/eventsDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query('SELECT users.user_id, username, screen_name, university FROM users LEFT JOIN (user_event) ON (users.user_id = user_event.user_id)\
            WHERE user_event.event_id = ?\
            ORDER BY username;', [eventid], function (error, results, fields) {
                console.log("query ran");
                // And done with the connection.
                connection.release();
            
                // Handle error after the release.
                if (error) throw error;
        
                //console.log(results);
                if(results.length !== 0)
                    callback(results);
                else {
                    callback(undefined)
                }
            
            
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    },
    keyword: function (callback, keyword) {
        
        var status = "";

        console.log("Calling 'keyword' in data/usersDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query("SELECT * FROM events\
                WHERE name LIKE '%" + keyword + "%'\
                OR description LIKE '%" + keyword + "%'\
                OR host LIKE '%" + keyword + "%'\
                OR university LIKE '%" + keyword + "%'\
                OR location LIKE '%" + keyword + "%';", function (error, results, fields) {
                console.log("query ran");

                // And done with the connection.
                connection.release();

                // Handle error after the release.
                if (error) throw error;
        
                //console.log(results);
                if(results.length !== 0)
                    callback(results);
                else {
                    callback(undefined)
                }
            
            
                // Don't use the connection here, it has been returned to the pool.
            });
        });
    }
};
