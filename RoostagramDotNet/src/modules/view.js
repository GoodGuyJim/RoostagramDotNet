(function () {
    'use strict';

    var PhotoView = Backbone.View.extend({
        template: _.template($('#photo-detail').text()),
        render: function () {

            // add to the DOM
            this.$el.html(
                this.template(
                    this.model.toJSON()
                )
            );

            return this;
        }
    });

    window.PhotoView = PhotoView;
}());