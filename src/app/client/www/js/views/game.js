define([
    'jquery',
    'underscore',
    'base',
    'hand',
    '../../templates/game.html'
], function ($, _, base, Hand, BaseTemplate) {

    'use strict';

    var exports = {};

    exports.BaseView = base.BaseView.extend({
        tagName: 'div',
        className: 'playingCards faceImages',

        render: function () {
            var south = new Hand.BaseView({cards: this.model.south.cards, className: 'hand'});
            this.$el.html(this.template());
            this.$el.append(south.render().el);
            return this;
        }
    });

    exports.BaseView.prototype.template = _.template(BaseTemplate);
    return exports;
});