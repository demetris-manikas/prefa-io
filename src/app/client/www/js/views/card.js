define([
    'jquery',
    'underscore',
    'base',
    '../../templates/card.html'
], function ($, _, base, BaseTemplate) {

    'use strict';

    var exports = {};

    exports.BaseView = base.BaseView.extend({
        tagName: 'span',

        initialize: function () {
            this.rank = this.model.rank.toUpperCase();
            this.suit = this.model.suit;
        },

        render: function () {
            this.$el.html(this.template({rank: this.rank, suit: '&' + this.suit}));
            return this;
        }
    });

    exports.BaseView.prototype.template = _.template(BaseTemplate);
    return exports;
});