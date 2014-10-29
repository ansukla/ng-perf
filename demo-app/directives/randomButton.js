angular.module('ngPerf.randomButton', [])
    .directive('randomButton', function() {
        return {
            restrict: 'EA',
            scope: {},
            controller: function($scope) {
                $scope.randomNumber = '123';
                $scope.generateRandom = function() {
                    $scope.randomNumber = Math.floor(Math.random()*100);
//                    event.preventDefault(); //uncomment to suppress digest altogether
                }
            },
            template: '<button ngp-local-click="generateRandom(event)">Random</button><span ng-bind="randomNumber"></span>',
            link: function(){}
        };
    });