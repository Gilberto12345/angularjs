const app = angular.module('universidadApp', [ ]);
/* Los controladores se encargan de todas las funciones relacionadas con algun objeto */
app.controller('profesorCtrl', function (){

    this.profesor = profesorData;

});

var profesorData = {
	nombre: "Juan Carlos Pineda",
	bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
	edad: 47,
	foto: "img/juancarlos.jpg"
}