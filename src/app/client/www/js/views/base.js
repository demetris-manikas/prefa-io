define([
    'underscore',
    'backbone'
], function (_, Backbone) {

    'use strict';

    var exports = {};

    // Underscore template settings
    // `{{ variable }}` for escaped text
    // `{< variable >}` for raw html interpolations
    // `{% expression %}` for javascript evaluations
    _.templateSettings = {
        evaluate : /\{%([\s\S]+?)%\}/g,
        escape : /\{\{([\s\S]+?)\}\}/g,
        interpolate : /\{<([\s\S]+?)>\}/g
    };

    // BaseView, the mother of all views.

    exports.BaseView = function (options) {
        this.subviews = {};
        Backbone.View.apply(this, [options]);
    };

    _.extend(exports.BaseView.prototype, Backbone.View.prototype, {

        addView: function (id, view) {
            if (this.subviews[id]) {
                this.subviews[id].dispose();
            }
            this.subviews[id] = view;
            view.parentView = this;
        },

        removeView: function (id) {
            if (_.has(this.subviews, id)) {
                this.subviews[id].dispose();
                delete this.subviews[id];
            }
        },

        disposeViews: function () {
            // Dispose all subviews first.
            _.each(this.subviews, function (view, key) {
                view.dispose();
                delete this.subviews[key];
            }, this);
        },

        dispose: function () {
            // Dispose all subviews first.
            _.each(this.subviews, function (view, key) {
                view.dispose();
                delete this.subviews[key];
            }, this);

            this.remove(); // uses the default Backbone.View.remove() method which removes this.el from the DOM and removes DOM events.
        }

    });

    exports.BaseView.extend = Backbone.View.extend;

    return exports;
});