var app = angular.module('universidadApp', ['ngRoute']);

app.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.menuSuperior = 'partials/menu.html';

}]);