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
            $scope.Misc = Product.query({categoryid: 2});
           console.log(Product.query({ categoryid: 2 }))
        }
        getMiscProducts();
    }])
    .controller('singleProduct', ['$scope','$routeParams', 'Single', function($scope, $routeParams, Single){
        const idToGet = $routeParams.id;
        console.log(idToGet)
        $scope.single = Single.get({id: idToGet});
        console.log($scope.single)

    }])