let app = angular.module('store',[
    'ngRoute',
    'ngResource',
    'store.controllers',
    'store.services',
    'store.directives'
])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/placeholder.html'

    })
    .when('/apparel', {
        templateUrl: 'views/placeholder.html',
        controller : 'placeholderController'
    })
    .when('/misc', {
        templateUrl: 'views/placeholder.html',
        controller : 'placeholderController'
    })
    .when('/checkout', {
        templateUrl: 'views/placeholder.html',
        controller : 'placeholderController'
    })
}])