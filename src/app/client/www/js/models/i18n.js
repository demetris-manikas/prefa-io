define([
    'underscore',
    'baseModel'
], function (_, Base) {

    'use strict';

    var exports;

    exports = Base.Model.extend({

        defaultLang : 'en',

        supportedLanguages: ['en', 'el', 'fr'],

        defaults: {
            'lang': ''
        },

        init: function () {
            var lang,
                browserLang;

            if (typeof (Storage) !== 'undefined') {
                lang = localStorage.getItem('lang');
                if (!this.isLangSupported(lang)) {
                    lang = this.defaultLang;
                }
            } else {
                lang = this.defaultLang;
            }
            if (!lang) {
                browserLang = (navigator.language || navigator.browserLanguage).split('-')[0];
                if (this.isLangSupported(browserLang)) {
                    lang = browserLang;
                } else {
                    lang = this.defaultLang;
                }
            }
            this.set({lang: lang});
        },

        setLanguage: function (lang) {
            if (this.get('lang') === lang) {
                return false;
            }

            if (this.isLangSupported(lang)) {
                this.set('lang', lang);
                if (typeof (Storage) !== 'undefined') {
                    localStorage.setItem('lang', lang);
                }
                return true;
            }
            return false;
        },

        isLangSupported: function (lang) {
            return _.indexOf(this.supportedLanguages, lang) !== -1;
        }
    });

    return exports;
});