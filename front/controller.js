 angular.module('myApp').controller('adressCtrl',
	['adressService', '$scope', function (adressService, $scope) {

		adressService.upload().then(function (result) {
      $scope.test = result;
		});
}])