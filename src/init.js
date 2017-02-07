(function() {
    'use strict';

    var Jinn = null;

    // On page loaded
    $(function () {
        // Mapping views to routes
        var routeMap = {
            '#': ['view1', 'view2'],

            '#news': ['view3']
        };

        Jinn = new JinnApp('body');
        var model = new Model({ lol: 'Lol' });
        var model1 = new Jinn.Model({ kek: 'kekdata' });
        $.extend(model1, {

        });
        var view = new View(model);
        console.log(model1);
        model1.set('lol', 3);
        console.log(model1.get());
        console.log(model1.get('kek'));
        console.log(model1.get('lol'));
        console.log(model1.get('lol', 'kek'));
    });
})();