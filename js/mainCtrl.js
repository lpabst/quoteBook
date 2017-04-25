angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService){


$scope.quotes = mainService.getQuotes();

$scope.addQuote = mainService.addQuote;
$scope.deleteQuote = mainService.deleteQuote;

var show = true;

$scope.showInput = function(){
    $scope.show = !$scope.show;
};









});