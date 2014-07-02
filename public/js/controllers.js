


var app = angular.module('ciklApp', [
  'ui.bootstrap',
  'sy.bootstrap.timepicker',
  'template/syTimepicker/timepicker.html',
  'template/syTimepicker/popup.html'
]);

app.controller("SearchCtrl", function($scope, $http) {
  $scope.term = {};

  $scope.update = function(search) {
    $scope.term = search.term;
    $scope.type = search.type;

    if ($scope.type === 'ip-address') {
      $http.post('http://localhost:8080/api/v1/query/ipv4.json', {ipv4:$scope.term}).
          success(function (data) {
            $scope.query = data;
          }).
          then(function() {
          });
    }
    else if ($scope.type === 'dns') {
      $http.post('http://localhost:8080/api/v1/query/fqdn.json',
          {
            start:1,
            per_page:20,
            order_by:'import_time',
            order:'asc',
            timing:1,
            fqdn:$scope.term
          }).
          success(function (data) {
            $scope.query = data;
          }).
          then(function() {
          });
    }
  }

});


var DatepickerMinCtrl = function ($scope) {
  $scope.today = function() {
    $scope.date = new Date();
    $scope.date.setDate($scope.date.getDate() - 1);
  };
  $scope.today();

  $scope.clear = function () {
    $scope.date = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
};

var TimepickerMinCtrl = function ($scope) {
  $scope.date = new Date();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
};


var DatepickerMaxCtrl = function ($scope) {
  $scope.today = function() {
    $scope.date = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.date = null;
  };

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.initDate = new Date('2016-15-20');
  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
};

var TimepickerMaxCtrl = function ($scope) {
  $scope.date = new Date();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };
};