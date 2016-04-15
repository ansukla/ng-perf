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
            when("/bind-once", {templateUrl: "ng-repeat/bind-once.html", controller: "repeatController"}).
            when("/expression-bind", {templateUrl: "ng-repeat/expression-bind.html", controller: "repeatController"}).
            when("/ng-bind", {templateUrl: "ng-repeat/ng-bind.html", controller: "repeatController"}).
            when("/direct", {templateUrl: "ng-repeat/direct.html", controller: "repeatController"}).
            when("/ng-class", {templateUrl: "ng-repeat/ng-class.html", controller: "repeatController"}).
            when("/ng-style", {templateUrl: "ng-repeat/ng-style.html", controller: "repeatController"}).
            when("/class-expression", {templateUrl: "ng-repeat/class-expression.html", controller: "repeatController"}).
            when("/expression", {templateUrl: "ng-repeat/complex-expressions.html", controller: "repeatController"}).
            when("/expressions", {templateUrl: "expressions/expressions-view.html", controller: "expressionsController"}).
            otherwise({redirectTo: '/direct'});
        $compileProvider.debugInfoEnabled(false);
    }]
    );