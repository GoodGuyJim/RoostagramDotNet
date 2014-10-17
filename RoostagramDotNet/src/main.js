define(function(require) {
    'use strict';
    var Photo = require('src/modules/components/photo/model');
    var PhotoView = require('src/modules/components/photo/view');

    var photo = new Photo({
        id: 19
    });

    var photoView = new PhotoView({
        model: photo
    });

    photoView.$el.appendTo('body');

    photo.fetch({
        success: function () {
            photoView.render();
        },
        error: function () {
            // Just do the same thing since the check
            // is in the template right now
            photoView.render();
        }
    });
});
