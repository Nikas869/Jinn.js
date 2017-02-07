'use strict';

var _ = (function() {
    var Extensions = {};

    Extensions.getUniqueId = (function() {
        var uniqueIdcounter = 1;
        var getUniqueId = function() {
            return uniqueIdcounter++;
        }
        return getUniqueId;
    }());

    Extensions.Array.remove = function(array, index) {
        array.splice(index, 1);
    };

    return Extensions;
}());