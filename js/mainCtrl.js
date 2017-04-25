angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService){


$scope.quotes = mainService.getQuotes();













});