/**
 *
 * License: MIT
 * @Description: Shameless hacks to workaround angular performance bottlenecks
 *
 */
//Bypass .data calls with argument $binding improves ng-bind and {{}} expression binding performance
//Applies to 1.2 only
if (jQuery) {
    var originalFn = $.fn.data;
    $.fn.data = function() {
        if (arguments[0] !== '$binding')
            return originalFn.apply(this, arguments);
    }
}