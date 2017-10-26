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
        // controller: ''

    })
    .when('/product', {
        templateUrl: 'views/product.html',
        controller : 'apparel'
    })
    .when('/misc', {
        templateUrl: 'views/misc.html',
        controller : 'misc'
    })
    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller : 'placeholderController'
    })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'placeholderController'
    })
    .when('/:id', {
        templateUrl: 'views/singleview.html',
        controller: 'singleProduct'
    })
}])