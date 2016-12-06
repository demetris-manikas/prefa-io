define([
    'jquery',
    'backbone',
    'home'
], function ($, Backbone, Home) {

    'use strict';

    var exports = Backbone.Router.extend({

        HomeView: null,

        routes: {
            '': 'home',
            '*notFound': 'notFound'
        },

        initializeRouter: function () {
            this.HomeView = new Home.BaseView({el: $('body')});
            this.HomeView.render();
            Backbone.history.start({pushState: true});
        },

        home: function () {
//            this.HomeView.render();
        },

        notFound: function () {
            Backbone.history.navigate('', {trigger:true});
        }
    });

    return exports;
});