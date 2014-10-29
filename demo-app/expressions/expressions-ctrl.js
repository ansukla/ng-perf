var module = angular.module('blah', []);

    module.controller('expressionsController', ['$scope', function($scope) {
        $scope.test = "Success";
        $scope.blah = function () {

        }
    }]);