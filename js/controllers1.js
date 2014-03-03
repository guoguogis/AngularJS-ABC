'use strict'

function PhoneListCtrl($scope,$http) {
  $http.get('data/phones.json').sucess(function(data){
      $scope.phones = data;
  });

  $scope.orderProp = 'age';

  $scope.hello = 'hello world!';
}