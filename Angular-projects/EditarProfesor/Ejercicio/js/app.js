const app = angular.module('universidadApp', [ ]);
/* Los controladores se encargan de todas las funciones relacionadas con algun objeto */
/* Scope es una variable global que no esta solo dentro del controlador */
app.controller('profesorCtrl', function ($scope){

	$scope.profesor = profesorData;
	$scope.editando = {};

	/* Variable que controlo la visibilidad del formulario */
	$scope.showCaja = false;

	$scope.editarProfesor = function(){
		angular.copy($scope.profesor,$scope.editando);
		$scope.showCaja = true;
	}

	$scope.save = function (){
		angular.copy($scope.editando,$scope.profesor);
		$scope.showCaja = false;

	}

	$scope.cancel = function (){
		$scope.editando = {};
		$scope.showCaja = false;
		
	}

    /* this.profesor = profesorData; */
});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}