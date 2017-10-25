angular.module('store.controllers', [])
    .controller('apparel', ['$scope', 'Product', '$routeParams', function ($scope, Product, $routeParams) {
        
            console.log(Product.query({ categoryid: 2 }))
    
    }])