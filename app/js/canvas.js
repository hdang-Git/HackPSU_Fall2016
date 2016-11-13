var app = angular.module('myApp', []);
app.controller('ctrl1', function($scope, $http){
    $http.get("app/canvas.json")
    .then(function(response){
        $scope.firstname = response.data.fname;
        $scope.lastname = response.data.lname;
        $scope.grade = response.data.grade;
    });
});