app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'partials/home.html'
        })
        .when('/profesores',{
            templateUrl:'partials/profesores.html'
        })
        .when('/alumnos',{
            templateUrl:'partials/alumnos.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});