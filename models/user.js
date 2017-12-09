'use strict';

function User(options) {
    if (!options) {
        options = {};
    }
    
    this.user_id = options.user_id;
    this.username = options.username;
    this.screen_name = options.screen_name;
    this.email = options.email;
    this.university = options.university;
    this.pword = options.pword;
}

module.exports = User;
