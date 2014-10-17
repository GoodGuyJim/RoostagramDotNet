define(function(require) {
    'use strict';

    var Backbone = require('backbone');
    var PhotoCollection = require('src/modules/components/photo/collection');
    var GalleryView = require('src/modules/components/photo/gallery');

    require('modules/core/router');

    Backbone.history.start();

    var photos = new PhotoCollection();

    // Create gallery view with supplied photo collection
    var gallery = new GalleryView({
        collection: photos,
        el: '#app'
    });

    photos.fetch().then(function () {
        gallery.render();
    });
});
