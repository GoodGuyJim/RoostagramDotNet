define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    var $ = require('jquery');

    var Photo = require('src/modules/components/photo/model');
    var PhotoView = require('src/modules/components/photo/detail');
    var PhotoCollection = require('src/modules/components/photo/collection');
    var GalleryView = require('src/modules/components/photo/gallery');

    var Router = Backbone.Router.extend({

        routes: {
            '': 'index',
            'photos/:id': 'photo'
        },

        index: function () {
            var photos = new PhotoCollection();

            // Create gallery view with supplied photo collection
            var gallery = new GalleryView({
                collection: photos,
                el: '#app'
            });

            photos.fetch().then(function () {
                gallery.render();
            });
        },

        photo: function(id) {
            var photo = new Photo({
                id : id
            });

            var view = new PhotoView({
                model: photo
            });

            $('#app').html(view.$el);

            photo.fetch({
                success: function() {
                    view.render();
                }
            });
        }
    });

    return new Router();

});