 angular.module('myApp').controller('adressCtrl',
	['adressService', '$scope', '$http', function (adressService, $scope, $http) {
		$scope.uploadFile = function(file, uploadUrl){
			var fd = new FormData();
			 
			fd.append('file', file[0]);
			$http.post('/api/file', fd, {
				headers: {
					'Content-Type': undefined
				},
				transformRequest: angular.identity,
			})
			.then(function(response){
				console.log(response.data);
			})
			.catch(function() {
				console.log('catch');
			});
			}}]);