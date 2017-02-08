(function() {
    'use strict';

    // creating new app instance
    var Jinn = new JinnApp();
    // cl
    _.l(Jinn);
    // creating new model with data.somedata
    var model = new Jinn.Model({ somedata: 'somedata value' });
    _.l(model);
    // creating another model with data.anotherdata and overriding get() method
    var model1 = new Jinn.Model({ anotherdata: 'anotherdata value' });
    _.extend(model1, {
        get: function() {
            alert(this.data.anotherdata);
        }
    });
    _.l(model1);
    // creating another one model
    var model3 = _.extend(new Jinn.Model, {
            data: {
                key: 'value'
            },

            hello: function() {
                var data = this.get('key');
                alert(data);
            }
        })
        // call to hello()
    model3.hello();
    // creating new view bounded to 'model' and overriding render() method
    var view = _.extend(new View(model), {
        render: function() {
            for (var i = 0; i < this.models.length; i++) {
                alert(this.models[i].get('somedata'));
            }
        }
    });
    view.render();
    _.l(view);
})();