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
    .controller('contact', ['$scope', 'ContactForm', function($scope, ContactForm){
    //   TODO: edit contact.html to use ng-submit="send() with email and message models"
        $scope.send = function() {
            let contact = new ContactForm({
                email: $scope.email,
                message: $scope.message
            });
            contact.$save(function(){
                alert('Thank you for your message. We will get back with you as soon as possible.')
            }, function(err){
                console.log(err)
            });
        }
    }])