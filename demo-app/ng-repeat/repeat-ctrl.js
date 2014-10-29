angular.module('NgPerf.controllers', []).

    controller('repeatController', ['$scope', '$http', '$log', '$compile', '$routeParams', function($scope, $http, $log, $compile, $routeParams) {
        var direct = false, preBind = false;
        $scope.contacts = [];
        $scope.random = function () {
            $scope.randomNumber = Math.round(Math.random()*100);
        }
        $scope.flipColor = function () {
            $scope.negative = !$scope.negative;
            $scope.color = $scope.negative? "red":"green";
        }
        $scope.myFunction = function () {
            return '1234';
        }
        $scope.fetchData = function () {
            if (preBind) {
                $.get('ng-repeat/ng-repeat-data-1000.json', function (data) {
                    //angular.element("#myRemovableTable").detach();
                    angular.element("#directHTML").empty();
                    $scope.preloadedContacts = data;//.splice(0,3);
                    $.get('../ng-repeat/repeat-template.html', function (data) {
                        var orig = jQuery.fn.data;
                        var el = angular.element(data);
                        el.attr('id', 'myRemovableTable');
                        var linkFn = $compile(el);
                        linkFn($scope);
                        $scope.$digest();
                        angular.element("#directHTML").append(el);
                    });
                });
            } else {

                $http({method: 'GET', url: 'ng-repeat/ng-repeat-data-1000.json'}).
                    success(function(data, status, headers, config) {

                        if (!$routeParams.direct) {

                            $scope.contacts = data;

                        } else {

                            var htmlStr = '<table>',
                                fields = ['name', 'company', 'email', 'age', 'eyeColor', 'gender', 'phone', 'address', 'registered', 'latitude', 'longitude', 'favoriteFruit'];
                            for (var i = 0; i < data.length; i ++) {
                                var contact = data[i];
                                htmlStr += '<tr>';
                                for(var j = 0; j < fields.length; j++ ) {
                                    htmlStr += '<td>' + contact[fields[j]] + '</td>'
                                }
                                htmlStr += '</tr>';
                            }
                            htmlStr += '</table>';
                            //$("#directHTML").innerHTML = "HELLO";
                            angular.element("#directHTML").html(htmlStr);
                            //$scope.tableHTML = htmlStr;

                        }
                    }).
                    error(function(data, status, headers, config) {
                        $log.error(data);
                    });
               }

        };
        $scope.fetchData();
        $scope.changeData = function() {
            $scope.contacts[0] && ($scope.contacts[0].name = Math.round(Math.random()*100));
        }
    }]);

angular.module('NgPerf.controllers').
    controller('randomController', ['$scope', '$http', '$log', '$compile', function($scope, $http, $log, $compile) {
        $scope.randomNumber = '123';
        $scope.generateRandom = function() {
            $scope.randomNumber = Math.floor(Math.random()*100);
//                    event.preventDefault(); //uncomment to suppress digest altogether
        }
    }]);