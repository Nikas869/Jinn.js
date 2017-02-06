'use strict';

function Application(routeMap) {
    this._routeMap = routeMap;
    this.data = {};
    this._models = [];
    this._views = [];

    this.init();
};

Application.prototype = {
    init: function() {
        this.router = new Router(this._routeMap);
        this._analizeDom()
            ._initializeModels()
            ._initializeViews();
    },

    _analizeDom: function() {
        // TODO: analize DOM of document and find elements with specifyied 'data-' attr

        return this;
    },

    _initializeModels: function() {
        // TODO: analize founded elements and create models for them

        return this;
    },

    _initializeViews: function() {
        // TODO: map elements and theirs setting to views using this._models

        return this;
    },

    bind: function(model, view) {

    },

    get: function() {

    }
};