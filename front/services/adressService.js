angular.module('myApp')
.factory('addresService', ['$resource',
    function ($resource) {
        return $resource('/api/file/', {}, {
            query: { method: "GET", isArray: true },
            create: { method: "POST"},
            get: { method: "GET"},
            remove: { method: "DELETE"},
            update: { method: "PUT"}
        });
 
}]);