(function() {
    'use strict';

    var jinn = null;

    // On page loaded
    document.addEventListener('DOMContentLoaded', function() {
        jinn = new JinnApp();
        var model = new jinn.Model({

            data: {
                number: null
            }

        });
        var view1 = new jinn.View({

            render: function() {
                this.label1 = document.getElementById('label');
                this.label1.innerHTML = this.models[0].get('number');
            }

        }, model);

        var view3 = new jinn.View({

            render: function() {
                this.label1 = document.getElementById('label2');
                this.label1.innerHTML = this.models[0].get('number');
            }

        }, model);

        var view2 = new jinn.View({

            init: function() {
                this.p = document.getElementById('input');

                var element = this.p;
                var model = this.models[0];

                var setModel = function() {
                    model.set('number', element.value);
                }

                this.p.addEventListener('input', setModel);
            }

        }, model);

        _.l(view1);
        _.l(view2);
        _.l(model);
    });
})();