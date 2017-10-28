angular.module('myApp')
.service('addresService', 
    function ($resource) {
			var api = $resource('/api/:a/', null, {
				// getAll: {isArray: true},
				// getBuildableArtifacts: {method: 'GET', isArray: true, params: {a: 'file'}},
				upload: {method: 'POST', params: {a: 'file'}},
				// cancelBuild: {method: 'POST', params: {a: 'file'}},
				// getBuildState: {method: 'GET', params: {a: 'file'}},
				// use: {method: 'POST', params: {a: 'file'}},
				// destroy: {method: 'POST', params: {a: 'file'}}
			});

			return {
				build: function (artifact)
				{
				  return api.upload({}, {a: artifact}).$promise;
				}
		};
});


