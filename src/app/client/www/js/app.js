define([
    'router',
    'globals'
], function (Router, globals) {

    'use strict';
    var exports = {};

    exports.App = {
        start: function () {
            new Router().initializeRouter();
            globals.i18n.init();
        }
    };

    return exports;
});