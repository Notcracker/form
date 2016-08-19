'use strict';

angular.module('myApp')
	.factory('formFactory', function() {
    
            var formfac = {};

            formfac.fetch = function(object) {
            	var errorList = {
				    email: ['already_in_use'],
				    phone: ['wrong_format', 'already_in_use'],
				    common: ['server_error']
				};
            	return errorList;
            };

            return formfac;
    
        })

;