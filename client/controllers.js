angular.module('store.controllers', [])
    .controller('apparel', ['$scope', 'Product', '$routeParams', function ($scope, Product, $routeParams) {
        function getProduct() {
            $scope.Product = Product.query({ categoryid: 1});
            console.log(Product.query({ categoryid: 1 }));
        };
        getProduct();     
    }])
    .controller('misc', ['$scope', 'Product', '$routeParams', function($scope, Product, $routeParams){
        function getMiscProducts() {
            $scope.Product = Product.query({categoryid: 2});
           console.log(Product.query({ categoryid: 2 }))
        }
        getMiscProducts();
    }])
    .controller('singleProduct', ['$scope','$routeParams', 'Product', function($scope, $routeParams, Product){
        const idToGet = $routeParams.id;
        $scope.Product = Product.get({id: idToGet});

    }])