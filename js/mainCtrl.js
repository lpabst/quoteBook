angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService){

$scope.test = 'controller is working';

$scope.serviceTest = mainService.serviceTest;



});