'use strict';

/**
 *
 * License: MIT
 * @Description: ngp-local-* directives are very similar to ng-* event directives such as ng-click etc. except that
 * it calls digest on the immediate scope instead of $rootScope.$digest(). Additionally calling preventDefault on the event
 * stops digest calls.
 *
 */

angular.module('ngPerf.directives', []);
angular.forEach(
    'click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste'.split(' '),
    function(eventName) {
        var directiveName = 'ngpLocal' + eventName.charAt(0).toUpperCase() + eventName.substr(1);
        angular.module('ngPerf.directives').directive(directiveName, ['$parse', function($parse) {
            return {
                restrict: 'A',
                compile: function($element, attr) {
                    var fn = $parse(attr[directiveName]);
                    return function localEventHandler(scope, element) {
                        element.on(eventName, function(event) {
                            var callback = function() {
                                fn(scope, {$event:event});
                            };
                            scope.$eval(callback);
                            if (!event.isDefaultPrevented()) {
                                scope.$digest();
                            }
                        });
                    };
                }
            };
        }]);
    }
);
