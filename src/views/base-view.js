'use sctrict';

function View() {
    this.models = [];
    var argModels = arguments;
    attachModels.call(this);
    
    function attachModels() {
        for (var i = 0; i < argModels.length; i++) {
            if (argModels[i] instanceof Model) {
                this.models.push(argModels[i]);
            }
        }
    }

    this.dataGetEvent = new Event(this);

    this.init();
}

View.prototype = {

    init: function() {
        this.createChildren()
            .setupHandlers()
            .enable();
    },

    createChildren: function () {
        this.$button = $('.button');

        return this;
    },

    setupHandlers: function() {
        this.modelUpdateHandler = this.render.bind(this);

        return this;
    },

    enable: function() {
        this.$button.click(this.modelUpdateHandler);
        for (var i = 0; i < this.models.length; i++) {
            this.models[i].dataSetEvent.attach(this.modelUpdateHandler);
        }

        return this;
    },

    render: function() {
        console.log(this.models[0].get());
    }
};