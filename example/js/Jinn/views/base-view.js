'use sctrict';

var View = function() {
    this.models = [];
    var argModels = arguments;
    attachModels.call(this, argModels);

    function attachModels(argModels) {
        for (var i = 0; i < argModels.length; i++) {
            if (argModels[i] instanceof Model) {
                this.models.push(argModels[i]);
            }
        }
    }

    this.events = new EventService();

    this.init();
}

View.prototype = {

    init: function() {
        this.createChildren()
            .setupHandlers()
            .enable();
    },

    createChildren: function() {
        return this;
    },

    setupHandlers: function() {
        this.modelUpdateHandler = this.render.bind(this);

        return this;
    },

    enable: function() {
        for (var i = 0; i < this.models.length; i++) {
            this.models[i].events.registerListener(EventService.messages.MODEL_HAS_BEEN_UPDATED,
                this.modelUpdateHandler,
                this);
        }

        return this;
    },

    render: function() {
        _.l('View: render()');
    }
};