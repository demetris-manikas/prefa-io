define([
    'jquery',
    'app',
    'globals',
    '../css/prefa-io.css'
], function ($, app, globals) {

    'use strict';

    $(function () {
        globals.app = app.App;
        $.ajaxSetup({ cache: false });
        globals.app.start();
    });
});
