let app = angular.module('store',[
    'ngRoute',
    'ngResource',
    'store.productFactory',
    'store.controllers'
    // 'store.services',
    // 'store.directives'
])

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'apparel'

    })
    // .when('/apparel', {
    //     templateUrl: 'views/placeholder.html',
    //     controller : 'placeholderController'
    // })
    // .when('/misc', {
    //     templateUrl: 'views/placeholder.html',
    //     controller : 'placeholderController'
    // })
    // .when('/checkout', {
    //     templateUrl: 'views/placeholder.html',
    //     controller : 'placeholderController'
    // })
}])