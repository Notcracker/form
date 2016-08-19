'use strict';

angular.module('myApp', ['ui.mask'])
  .controller('formController', ['$scope', 'formFactory', function($scope, formFactory) {
    $scope.myForm = {username: '', password:'', phone: null, email:''};
    $scope.errors;

    $scope.sendForm = function() {
      $scope.errors = formFactory.fetch($scope.myForm);
      console.log($scope.errors);
    };
    
  }]);