var salaryApp = angular.module("salaryApp", []);

salaryApp.controller("salaryController", ["$scope", function($scope) {
  console.log("salary controller working!");
  $scope.employee = {};
  $scope.employees = [];
  $scope.salaries = 0;

  salaryTotal= function(employee) {
    $scope.salaries += Math.round($scope.employee.salary/12*100)/100;
  }

  $scope.addEmployee = function() {
    $scope.employee.first_name = $scope.first_name;
    $scope.employee.last_name = $scope.last_name;
    $scope.employee.id = $scope.employeeid;
    $scope.employee.salary = $scope.employeesalary;
    var newemp = angular.copy($scope.employee);
    $scope.employees.push(newemp);
    salaryTotal($scope.employee);
    console.log($scope.employee);
    console.log($scope.employees);
    $scope.first_name = "";
    $scope.last_name = "";
    $scope.employeeid = "";
    $scope.employeesalary = "";
  }

  $scope.deleteEmployee = function(index) {
    $scope.employees.splice(index, 1);
    $scope.salaries -= Math.round($scope.employee.salary/12);
  }
}]);
