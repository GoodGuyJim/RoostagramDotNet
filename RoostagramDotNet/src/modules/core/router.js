define(function (require) {
    'use strict';
    var Backbone = require('backbone');
    var $ = require('jquery');

    var Photo = require('src/modules/components/photo/model');
    var PhotoView = require('src/modules/components/photo/detail');

    var Router = Backbone.Router.extend({

        routes: {
            '': 'hello',
            'photos/:id': 'photo'
        },

        hello: function () {
            alert('hello Roost!');
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