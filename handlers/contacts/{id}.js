'use strict';

 var repository = require('../../data/contactsDataHandler');

 module.exports = {
     get: function contacts_getById(req, res) {
         res.json(repository.get(req.params['id']))
     }    
 };