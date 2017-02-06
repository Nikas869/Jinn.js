(function() {
    'use strict';

    var app = null;

    // On page loaded
    $(function() {
        // Mapping views to routes
        var routeMap = {
            '#': ['view1', 'view2'],

            '#news': ['view3']
        };

        app = new Application(routeMap);
        var model = new Model('Lol');
        var view = new View(model);
        model.set('kek');
    });
})();