ng-perf is a set of utilities to help with AngularJS performance. 


ngp-local-*

A set of events that invoke $scope.digest() instead of $rootScope.apply. This will help with directives where the result of events only needs to be applied to the current scope and downward instead of all the way from rootScope. These events also provide a way to supress the digest altogether via preventDefault method.

To use directives

```
	bower install ng-perf
```

Include ngPerfLocalDirectives.js and add module ngPerf.directives as a dependency

```javascript

Here's an example directive using ngp-local-click.

angular.module('ngPerf.randomButton', ['ngPerf.directives'])
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

``` 



