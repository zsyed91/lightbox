define(["backbone"],
function(Backbone){

    var Lightbox = Backbone.View.extend({
        template: $('#lightbox-template'),
        initialize: function(options){

            this.selector = options.selector || "body";
            this.data = {
                content: options.content,
            };

        },

        events: {
            "click .close": "remove"
        },


        render: function(){
            $("#lightbox").remove();

            // ** Please swap this line and the line before initalize
            // ** with your template loading method, and engine you use
            var template = Handlebars.compile(this.template);

            this.$el.html(template(this.data));

            $(this.selector).append(this.el);
        }
    });
 

    return Lightbox; 

});