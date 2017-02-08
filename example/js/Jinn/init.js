(function() {
    'use strict';

    var jinn = null;

    // On page loaded
    document.addEventListener('DOMContentLoaded', function() {
        jinn = new JinnApp();
        var model = _.extend(new jinn.Model, {

            data: {
                number: null
            }

        });
        var view1 = _.extend(new jinn.View(model), {

            render: function() {
                this.label1 = document.getElementById('label');
                this.label1.innerHTML = this.models[0].get('number');
            }

        });
        view1.init();

        var view3 = _.extend(new jinn.View(model), {

            render: function() {
                this.label1 = document.getElementById('label2');
                this.label1.innerHTML = this.models[0].get('number');
            }

        });
        view3.init();

        var view2 = _.extend(new jinn.View(model), {

            render: function() {
                this.p = document.getElementById('input');

                var element = this.p;
                var model = this.models[0];

                var setModel = function() {
                    model.set('number', element.value);
                }

                this.p.addEventListener('input', setModel);
            }

        });
        view2.render();

        _.l(view1);
        _.l(view2);
        _.l(model);
    });
})();