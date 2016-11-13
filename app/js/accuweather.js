var run = 0;
var yoga = 0;
var swim = 0;
var gym = 0;
var study = 0;
var relax = 0;
var cycle = 0;
var temp = null;
var precip = null;
var scarf = null;
var iconclass = null;
var ptvar1;
var totvar2;
app.controller('myCtrl', function($scope, $http) {
    $http.get("http://apidev.accuweather.com/forecasts/v1/hourly/12hour/335315?apikey=PSUHackathon112016")
    .then(function(response) {
            $scope.content = response.data[0].Temperature.Value;
            $scope.precip = response.data[0].WeatherIcon;
            temp = $scope.content;
            precip = $scope.precip;
            $scope.appliedClass = weatherCheck();
            clothesCheck();
    });
    $http.get("app/canvas.json")
    .then(function(response) {
        var num;
        var total;
        num = response.data.class[0].points;
        total = response.data.class[0].total;
        $scope.grade = (num);
        $scope.cname = response.data.class[0].name;
        $scope.total = parseInt(total);
        ptvar1 = parseInt(num);
        totvar2 = parseInt(total);
        stuff(ptvar1, totvar2);

    });
});

var weatherCheck = function(){
    if(temp >= 40 && temp <= 80 && precip <= 10){
        return "wi wi-day-sunny";
        console.log("YO RUN DAWG IT'S GOOD OUT" + temp);
    } else {
        console.log("NOTHING Don't do it" + temp);
        console.log("NOTHING Don't do it" + precip);
        return "wi wi-night-sleet";
    }
}



var clothesCheck = function() {
    //boots
    if(precip > 22 && precip < 29) {
       run += 0;
       yoga += 20;
       swim += 5;
       gym += 10;
       study += 20;
       relax += 20;
       cycle += 0;
    }
    if(precip > 12 && precip < 21) {
        console.log("Umbrella");
              run += 0;
              yoga += 20;
              swim += 5;
              gym += 10;
              study += 20;
              relax += 20;
              cycle += 0;
    }
    if(precip > 0 && precip < 5) {
        console.log("Shades");
        run += 20;
        yoga += 0;
        swim += 20;
        gym += 0;
        study += 10;
        relax += 0;
        cycle += 10;
    }
    if(temp < 40) {
        console.log("Scarf2");
        run += 5;
        yoga += 10;
        swim += 10;
        gym += 10;
        study += 10;
        relax += 10;
        cycle += 10;
    }
    if(temp > 80) {
        console.log("Shorts");
        run += 20;
        yoga += 0;
        swim += 20;
        gym += 0;
        study += 10;
        relax += 0;
        cycle += 20;
    }
}


var pieData = [
            {
                value: 20,
                color:"#FF0000",
            },
            {
                value : 40,
                color : "#4ACAB4",
            }
        ];

var stuff = function(){//window.onload = function(){
    // Get the context of the canvas element we want to select
    var myChart= document.getElementById("myChart").getContext("2d");
    new Chart(myChart).Pie(pieData);
    //Create Radar chart
    var ctx2 = document.getElementById("radarChart").getContext("2d");
    var myNewChart = new Chart(ctx2).Radar(radarData);
}

//radar chart data
var radarData = {
   //labels : ["Eating","Drinking","Sleeping","Designing","Coding","Partying","Running"],
   labels : ["Running", "Indoor Yoga", "Swim", "Gym", "Studying", "Relaxing", "Cycling"],
   datasets : [
      {
          fillColor: "rgba(102,45,145,.1)",
          strokeColor: "rgba(102,45,145,1)",
         pointColor : "rgba(220,220,220,1)",
         pointStrokeColor : "#fff",
         //data : [65,59,90,81,56,55,40]
         data : [run, yoga, swim, gym, study, relax, cycle]
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