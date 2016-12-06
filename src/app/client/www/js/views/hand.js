define([
    'jquery',
    'underscore',
    'base',
    'card'
], function ($, _, base, Card) {

    'use strict';

    var exports = {};

    exports.BaseView = base.BaseView.extend({
        tagName: 'ul',

        initialize: function (options) {
            this.cards = options.cards;
        },

        render: function () {
            var container = document.createDocumentFragment();
            var self = this;
            var i = 0;
            var subView;
            var className;

            _.each(this.cards, function (card) {
                className = 'card rank-' + card.rank + ' ' + card.suit;

                subView = new Card.BaseView({model: card, className: className});
                self.addView(i++, subView);
                $('<li/>').append(subView.render().$el).appendTo(container);
            });
            this.$el.append(container);
            this.$el.html();
            return this;
        }
    });

    return exports;
});