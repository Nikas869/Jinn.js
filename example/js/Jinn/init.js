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

            init: function() {
                this.label1 = document.getElementById('label');

                return this;
            },

            render: function() {
                this.label1.innerHTML = this.models[0].get('number');

                return this;
            },

            show: function() {
                this.label1.style.display = 'block';

                return this;
            },

            hide: function() {
                this.label1.style.display = 'none';

                return this;
            }

        }, model);

        var view2 = new jinn.View({

            init: function() {
                this.label2 = document.getElementById('label2');

                return this;
            },

            render: function() {
                this.label2.innerHTML = this.models[0].get('number');

                return this;
            },

            show: function() {
                this.label2.style.display = 'block';

                return this;
            },

            hide: function() {
                this.label2.style.display = 'none';

                return this;
            }

        }, model);

        var view3 = new jinn.View({

            init: function() {
                this.p = document.getElementById('input');

                var element = this.p;
                var model = this.models[0];

                var setModel = function() {
                    model.set('number', element.value);
                }

                this.p.addEventListener('input', setModel);
                return this;
            },

            show: function() {
                this.p.style.display = 'block';

                return this;
            },

            hide: function() {
                this.p.style.display = 'none';

                return this;
            }

        }, model);

        jinn._addElements(view1, view2, view3, model);

        jinn.router = new jinn.Router({

            map: {
                '': 'index',
                '#teams': 'teams',
                '#results': 'results'
            },

            index: function() {
                this.hideAllViews();
                view3.show();
            },

            teams: function() {
                this.hideAllViews();
                view3.show();
                view1.show();
            },

            results: function() {
                this.hideAllViews();
                view3.show();
                view2.show();
            },

            hideAllViews: function() {
                var views = jinn._views;
                for (var viewId in views) {
                    if (views.hasOwnProperty(viewId)) {
                        views[viewId].hide();
                    }
                }
            }

        });

        jinn._run('#');
    });
})();