define(function(require) {
    'use strict';

    // photo collection view
    var PhotoCollection = require('src/modules/components/photo/collection');
    var GalleryView = require('src/modules/components/photo/gallery');

    var photos = new PhotoCollection();

    var gallery = new GalleryView({
        collection: photos,
        el: '#app'
    });

    photos.fetch().then(function () {
        gallery.render();
    });
});
