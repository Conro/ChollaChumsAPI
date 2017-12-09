'use strict';

 var contactsDataHandler = require('../data/contactsDataHandler');

 module.exports = {
     get: function contacts_get(req, res) {
         res.json(contactsDataHandler.all())
     }
 };