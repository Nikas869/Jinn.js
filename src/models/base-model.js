'use sctrict';

function Model(data) {
    this._data = data;

    this.dataSetEvent = new Event(this);
    this.dataEmptySetEvent = new Event(this);
}

Model.prototype = {

    init: function(initialData) {
        this.set(initialData);
    },

    // Setting new data and notifying about it
    set: function(newData) {
        this._data = newData;
        this.dataSetEvent.notify();
    },

    // Getter returns old model`s data and requests for new data
    get: function () {
        var oldData = this._data;
        this.updateData();

        return oldData;
    },

    // Gets data from server and sets it to model
    updateData: function() {
        var data = this.getData();
        if (data === 'actual') {
            this.dataEmptySetEvent.notify();
        } else {
            this.set(data);
        }
    },

    // AJAX request to server
    getData: function() {
        return 'actual';
    }
};