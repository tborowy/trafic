angular.module('myApp')
.service('adressService', 
    function ($resource) {
			var api = $resource('/api/:a/', null, {
				upload: {method: 'POST', params: {a: 'file'}, transformRequest: angular.identity, headers: { 'Content-Type': undefined }},
			});

			return {
				upload: function (fd)
				{
				  return api.upload({}, fd).$promise;
				}
		};
});


