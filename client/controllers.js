angular.module('store.controllers', [])
    .controller('apparel', ['$scope', 'Product', '$routeParams', function ($scope, Product, $routeParams) {
        function getProduct() {
            $scope.Product = Product.query({ categoryid: 1 });
            console.log(Product.query({ categoryid: 1 }));
        };
        getProduct();
    }])
    .controller('misc', ['$scope', 'Product', '$routeParams', function ($scope, Product, $routeParams) {
        function getMiscProducts() {
            $scope.Misc = Product.query({ categoryid: 2 });
            console.log(Product.query({ categoryid: 2 }))
        }
        getMiscProducts();
    }])
    .controller('singleProduct', ['$scope', '$routeParams', 'Single', '$cacheFactory', function ($scope, $routeParams, Single, $cacheFactory) {
        const idToGet = $routeParams.id;
        console.log(idToGet)
        $scope.single = Single.get({ id: idToGet });
        console.log($scope.single);


        
            $scope.keys = [];
            console.log($scope.keys);
            $scope.cache = $cacheFactory.get('cacheId') || $cacheFactory('cacheId');
            $scope.put = function () {
                if (angular.isUndefined($scope.cache.get(idToGet))) {
                    test = $scope.keys.push(idToGet);
                    console.log(idToGet)
                    console.log(test);
                    console.log($scope.keys)
                }
                $scope.cache.put(idToGet, angular.isUndefined(idToGet) ? null : idToGet);

            };
            
        
    }])
    .controller('contact', ['$scope', 'ContactForm', function ($scope, ContactForm) {
        //   TODO: edit contact.html to use ng-submit="send() with email and message models"
        $scope.send = function () {
            let contact = new ContactForm({
                from: $scope.email,
                message: $scope.message
            });
            console.log(contact);
            contact.$save(function () {
                alert('Thank you for your message. We will get back with you as soon as possible.')
            }, function (err) {
                console.log(err)
            });
        }
    }])
    .controller('cardController', ['$scope', 'Charge','Purchase', '$location', function($scope, Charge, Purchase, $location) {
        let elements = stripe.elements();
        let card = elements.create('card');

        card.mount('#card-field');

        $scope.process = function() {
            stripe.createToken(card).then((result) => {
                if (result.error) {
                    // $scope.error = result.error.message;
                    $scope.error = result.error.message;
                    // console.log(result.error)
                } else {
                    // result.token is the actual token to send to our server
                    let c = new Charge({
                        token: result.token.id,
                        amount: $scope.amount
                    });

                    c.$save(function(){
                        alert('Thank you for your purchase!');
                        // $location.path('/');
                    }, function (err){
                        console.log(err);
                    })
                    .then(function () {
                        let purchase = new Purchase ({
                            price: $scope.amount,
                            stripe: result.token.id
                        })
                    

                    purchase.$save(function (success) {
                        console.log(success);
                    }, function(err){
                        console.log(err);
                    })

                });
    } });
    } }]);

    // .controller('CacheController', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
    //     $scope.keys = [];
    //     $scope.cache = $cacheFactory('cacheId');
    //     $scope.put = function(key, value) {
    //       if (angular.isUndefined($scope.cache.get(key))) {
    //         $scope.keys.push(key);
    //       }
    //       $scope.cache.put(key, angular.isUndefined(value) ? null : value);
    //     };
    //   }]);