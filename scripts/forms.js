// var salaryApp = angular.module("salaryApp", []);
//
//
// var salaries = 0;
//
// $(document).ready(function() {
//   $('#employeeinfo').on('submit', function(event) {
//     event.preventDefault();
//     var empData = {};
//     var fields = $("#employeeinfo").serializeArray();
//     // turns form inputs into an array of objects  fields=[object, object, object]
// 
//     fields.forEach(function(forminput, index) {
//         empData[forminput.name] = forminput.value;
//     });
//
//     // console.log(empData);
//
//     $('#employeeinfo').find('input[type=text]').val('');
//
//     appendDom(empData);
//     salaryTotal(empData);
//   });
//
//   function appendDom(empInfo) {
//     $('#employeetable').append('<tr class ="person"></div');
//     var $el = $('#employeetable').children().last();
//     $el.append('<tr><td>' + empInfo.first_name + '</td><td>' + empInfo.last_name +  '</td><td>' + empInfo.employeeid + '</td><td>' + empInfo.employeesalary + '</td></tr>')
//   }
//
//   function salaryTotal(empInfo) {
//     salaries += Math.round(empInfo.employeesalary/12*100)/100;
//
//     $('#expenditures').text(salaries);
//   }
//
// });
