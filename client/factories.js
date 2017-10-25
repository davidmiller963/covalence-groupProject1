angular.module('store.productFactory', [])
.factory('Product', ['$resource', function($resource){
    return $resource('/api/products/category/:categoryid', {categoryid: '@categoryid'})
}])