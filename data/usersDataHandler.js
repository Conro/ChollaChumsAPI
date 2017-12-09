'use strict';

var db = require('../lib/db');

module.exports = {
    id: function (callback, id) {
        var status = "";
        
        console.log("Calling 'id' in data/usersDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query('SELECT * FROM `users` WHERE `user_id` = ?', [id], function (error, results, fields) {
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
    username: function (callback, username) {
        var status = "";
        
        console.log("Calling 'username' in data/usersDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query('SELECT * FROM `users` WHERE `username` = ?', [username], function (error, results, fields) {
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
    all: function (callback) {

        var status = "";

        console.log("Calling 'all' in data/usersDataHandler.js");
        db.getConnection(function(err, connection) {
            // Use the connection
            connection.query('SELECT * FROM users', function (error, results, fields) {
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
    add: function (callback, body) {
        
                var status = "";
        
                console.log("Calling 'add' in data/usersDataHandler.js");
                db.getConnection(function(err, connection) {
                    // Use the connection
                    connection.query('INSERT INTO users (username, screen_name, email, university, pword)\
                    SELECT * FROM (SELECT ? as username,\
                                        ? as screen_name,\
                                        ? as email,\
                                        ? as university,\
                                        ? as pword) as tmp\
                    WHERE NOT EXISTS (\
                        SELECT username\
                        FROM users\
                        WHERE username = ?) LIMIT 1', [body.username, body.screen_name, body.email, body.university, body.pword, body.username],
                        function (error, results, fields) {
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