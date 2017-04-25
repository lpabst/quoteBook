angular.module('myApp')
    .controller('mainCtrl', function($scope, mainService){


var show = true;

$scope.quotes = mainService.getQuotes();

$scope.addQuote = function(quote, author){
    mainService.addQuote(quote, author);
    $scope.inputQuote = '';
    $scope.inputAuthor = '';
    $scope.show = !$scope.show;
}


$scope.deleteQuote = function(i){
    mainService.deleteQuote(i);
}


$scope.showInput = function(){
    $scope.show = !$scope.show;
};









});