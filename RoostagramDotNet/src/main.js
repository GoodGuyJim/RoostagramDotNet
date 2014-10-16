(function() {
    'use strict';

    var photo = new Photo({
        id: 19
    });

    photo.fetch({
        success: function (photo) {
            console.log(photo);

            // add the photo to the body of our document

            $('<img>', {
                src: photo.get('dataUri')
            }).appendTo('body');
        }
    });
}());
