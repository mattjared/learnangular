(function(angular) {
	function MainController($scope) {
		$scope.helloworld = "Hello, Modernweb Developer!";
	}
	angular.module("app", []).controller("MainController", ["$scope", MainController]);
})(angular);
