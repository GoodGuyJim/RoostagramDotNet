(function() {
    'use strict';

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
        }
    });
}());
