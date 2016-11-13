var app = angular.module('myApp', []);
var temp = null;
var precip = null;
app.controller('myCtrl', function($scope, $http) {
    $http.get("http://apidev.accuweather.com/forecasts/v1/hourly/12hour/335315?apikey=PSUHackathon112016")
    .then(function(response) {
            $scope.content = response.data[0].Temperature.Value;
            $scope.precip = response.data[0].WeatherIcon;
            temp = $scope.content;
            precip = $scope.precip;
            weatherCheck();
            clothesCheck();
    });
});

function weatherCheck(){
    if(temp >= 40 && temp <- 80 && precip <= 10){
        console.log("YO RUN DAWG IT'S GOOD OUT");
    } else {
        console.log("NOTHING Don't do it");
    }
}

function clothesCheck() {
    if(precip > 22 && precip < 29) {
        console.log("Scarf");
        }
    if(precip > 12 && precip < 21) {
        console.log("Umbrella");
    }
    if(precip > 0 && precip < 5) {
        console.log("Shades");
    }
    if(temp < 40) {
        console.log("Scarf");
    }
    if(temp > 80) {
        console.log("Shorts");
    }
}


var pieData = [
            {
                value: 20,
                color:"#878BB6"
            },
            {
                value : 40,
                color : "#4ACAB4"
            },
            {
                value : 10,
                color : "#FF8153"
            },
            {
                value : 30,
                color : "#FFEA88"
            }
        ];
window.onload = function(){
        // Get the context of the canvas element we want to select
        var myChart= document.getElementById("myChart").getContext("2d");
        new Chart(myChart).Pie(pieData);


//Create Radar chart
var ctx2 = document.getElementById("radarChart").getContext("2d");
var myNewChart = new Chart(ctx2).Radar(radarData);
}

//radar chart data
var radarData = {
	labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
	datasets : [
		{
			 fillColor: "rgba(102,45,145,.1)",
			 strokeColor: "rgba(102,45,145,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			data : [65,59,90,81,56,55,40]
		},
		{
	        fillColor: "rgba(63,169,245,.1)",
            strokeColor: "rgba(63,169,245,1)",
			pointColor : "rgba(151,187,205,1)",
			pointStrokeColor : "#fff",
			data : [28,48,40,19,96,27,100]
		}
	]
}

