/**
 * Created by lenovo on 1/23/2017.
 */
var product = angular.module('product', []);


function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all todos and show them
    $http.get('/api/products')
        .success(function (data) {
            $scope.products = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    $scope.createProduct = function () {
        $http.post('/api/products', $scope.formData)
            .success(function (data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.products = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $http.get('/api/categories')
        .success(function (data) {
            $scope.categoryies = data;
            console.log(data);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });
}