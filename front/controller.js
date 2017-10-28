var app = angular.module('hackatonApp', []);

app.controller('adressCtrl', function($scope) {

	var data = {
		state: "start"
	};

	$http.post('/api/file', data, {
			headers: {
					'Content-Type': 'application/json'
			}
	})
	.success(function(data, status, headers, config) {
			console.log("ok");
			$scope.test = data;

	}).error(function() {
     console.log("error");
	});   
   
});