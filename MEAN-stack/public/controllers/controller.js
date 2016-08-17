
var app = angular.module('myApp', []);






app.controller('myCtrl', function($scope, $http) {

	refresh();

	function refresh(){
	$http.get('/skillsets').success(function(response){
		$scope.skillsets = response
		$scope.skill = "";

	});
};


	// $http.get('/skillsets').success(function(response){
	// 	console.log('I got the data I requested');
	// 	$scope.skillsets = response
	// });


	
	// addContact connects with ng-click="functionName()"
	$scope.add = function(){
		console.log($scope.skill);

		// Sending contact to server with /skillsets
		$http.post('/skillsets', $scope.skill).success(function(response){
			// print response from server
			console.log(response);
			refresh();
		});
	};


	$scope.remove = function(id){
		// Grapping ID from ng-click remove function with contact id as parameter
		console.log(id);
		$http.delete('/skillsets/' + id).success(function(response){
			console.log(response);
			refresh()
		});
	};


	$scope.edit = function(id){
		$http.get('/skillsets/' + id).success(function(response){
			$scope.skill = response;
			console.log(response);
		});
	};


	$scope.update = function(request, response){
		console.log($scope.skill._id);
		$http.put('/skillsets/' + $scope.skill._id, $scope.skill).success(function(response){
			refresh();
		})
		
	};


	$scope.clear = function(id){
		$scope.skill = "";
	};


});












