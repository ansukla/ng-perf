angular.module('NgPerf', [
        'NgPerf.controllers',
        'blah',
        'ngRoute',
        'ngPerf.directives',
        'ngPerf.randomButton'
    ]).
    config(['$routeProvider', '$compileProvider', function($routeProvider, $compileProvider) {
        $routeProvider.
            when("/repeat", {templateUrl: "ng-repeat/repeat-view.html", controller: "repeatController"}).
            when("/expressions", {templateUrl: "expressions/expressions-view.html", controller: "expressionsController"}).
            otherwise({redirectTo: '/repeat'});
//        $compileProvider.debugInfoEnabled(true);
    }]
    );