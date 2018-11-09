var app = angular.module('koriapp',['ngRoute']);

//Agregando Rutas

app.config(['$routeProvider', function ($routeProvider){

$routeProvider

.when('/',{
templateUrl: 'rutas/home.html',
})
.when('/alumnos',{
templateUrl: 'rutas/alumnos.html',
})
.when('/matricula',{
templateUrl: 'rutas/matricula.html',
})
.otherwise({
  redirectTo:'/'
})

}]);
