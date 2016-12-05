define([
    'backbone'
], function (Backbone) {

    'use strict';

    var exports = {};

    exports.Model = Backbone.Model.extend({

    });

    exports.Collection = Backbone.Collection.extend({

        baseUrl: '/static/data'

    });

    return exports;
});