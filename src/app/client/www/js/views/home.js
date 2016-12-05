define([
    'jquery',
    'underscore',
    'backbone',
    'base',
    'globals',
    '../../templates/home.html'
], function ($, _, Backbone, base, globals, HomeTemplate) {

    'use strict';

    var exports = {};

    exports.BaseView = base.BaseView.extend({
        socket: null,
        currentView: null,

        events: {
            'submit #send-message-form': 'sendMessage',
        },

        initialize: function () {
            this.socket = io();
            this.socket.on('chat message', function (msg) {
                $('#messages').append($('<li>').text(msg));
            });
        },

        sendMessage : function () {
            this.socket.emit('chat message', $('#m').val());
            $('#m').val('');
            return false;
        },

        showHomePage: function (ev){
            ev.stopPropagation();
            ev.preventDefault();
            Backbone.history.navigate('', {trigger: true});
        },

        showView: function (id, v) {
            var mainContent = this.$('#main_content');
            var old_view = this.subviews[id];
            var view = old_view || v;
            var self = this;

            if (!old_view) {
                this.addView(id, view);
                mainContent.append(view.$el);
                view.render();
            }

            if (this.currentView) {
                $(this.currentView.$el).fadeOut('fast', function () {
                    $(view.$el).fadeIn('fast');
                    self.currentView = view;
                });
            } else {
                $(view.$el).fadeIn('fast');
                this.currentView = view;
            }
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },
    });

    exports.BaseView.prototype.template = _.template(HomeTemplate);
    return exports;
});