var app = angular.module('gridTest', ['ngGrid']);

app.controller('GridController', function($scope) {
    $scope.myData = [{name: "Moroni", age: 50},
                     {name: "Tiancum", age: 43},
                     {name: "Jacob", age: 27},
                     {name: "Nephi", age: 29},
                     {name: "Enos", age: 34}];
    $scope.gridOptions = { 
        data: 'myData',
        enableCellSelection: true,
        enableRowSelection: false,
        columnDefs: [
            {
                field: 'name',
                displayName: 'Name',
                enableCellEdit: true,
                isCellContentEditable: true
            }, 
            {field:'age', displayName:'Age'}]
    };
});