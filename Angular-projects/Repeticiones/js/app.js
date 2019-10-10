(function () {

    var app = angular.module('universidadApp', []);

    app.controller('listadoCtrl', ['$scope', function ($scope) {

        $scope.listado = ["Fernando Herrera", "Rosa Flores", "Manuel Medrano", "Maria la de la pata fria"];

        $scope.listadoProfesores = {
            profesores: [{
                nombre: "Fernando Herrera",
                edad: 29,
                clase: "PEE"
            },
            {
                nombre: "Rosa Flores",
                edad: 24,
                clase: "ICE"
            },
            {
                nombre: "Manuel Medrano",
                edad: 42,
                clase: "M110"
            }]
        }

    }]);

})();