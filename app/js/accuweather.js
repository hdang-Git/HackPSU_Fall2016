var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
    $http.get("http://apidev.accuweather.com/currentconditions/v1/335315.json?apikey=PSUHackathon112016")
    .then(function(response) {
        //$scope.content = response.data;
        $scope.content = response.data[0].Temperature.Imperial.Value;
    });
});

$scope.pJson() = function(data){
    return angular.fromJson(data);
}


console.log("Yo I'm in the accuweather thing.");