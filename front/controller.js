 angular.module('myApp').controller('adressCtrl',
	['adressService', '$scope', function (adressService, $scope) {
		$scope.createProduct = function() {
			var state = {
				 state: "start"
			};
			adressService.create(state, function(data) {
			  console.log("good");
			});
	};
}])