﻿'use sctrict';

var Model = function(data) {
    this.data = data || {};
    var prefix = 'm';
    this._id = prefix + _.getUniqueId();

    this.events = new EventService();

    // TODO: correct inheritance to call overrided init func
    this.init.call(this);
};

_.extend(Model.prototype, {
    init: function() {},

    // Setting new data and notifying about it
    // TODO: ability to set multiple key:value or set as {key:value} object
    set: function(key, value) {
        if (arguments.length !== 2 || typeof arguments[0] !== 'string') {
            return this;
        }
        this.data[key] = value;

        this.events.sendMessage(EventService.messages.MODEL_HAS_BEEN_UPDATED, key);
        return this;
    },

    // Getter, returns model`s data
    // TODO: ability to return multiple values
    get: function(key) {
        if (arguments.length > 1) return void 0;
        if (arguments.length === 0) return this.data;
        return this.data[key];
    },

    // Clears data object
    clear: function() {
        this.data = {};
        return this;
    },

    // Gets data from server and sets it to model
    updateData: function() {

    },

    // Serializing model
    toJSON: function() {
        return this.data.toJSON();
    }
});