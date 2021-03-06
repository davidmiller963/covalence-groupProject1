angular.module('store.productFactory', [])
.factory('Product', ['$resource', function($resource){
    return $resource('/api/products/category/:categoryid', {categoryid: '@categoryid'})
}])
 .factory('Single', ['$resource', function($resource) {
    return $resource('/api/products/:id', {id: '@id'}, {
    });
}])
.factory('ContactForm', ['$resource', function($resource){
   return $resource('/api/contactforms/:id', { id: '@id' })
}])
.factory('Charge', ['$resource', function($resource){
    return $resource('/api/purchase/:id', {id: '@id'})
  }])
.factory('Purchase', ['$resource', function($resource){
    return $resource('/api/charge/:id', {id: '@id'})
  }]);