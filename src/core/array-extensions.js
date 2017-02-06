'use strict';

function ArrayExtensions() {

};

ArrayExtensions.prototype = {
    remove: function(array, index) {
        array.splice(index, 1);
    }
};