# lightbox

A simple Backbone lightbox component. Need to put a form, or some other custom content into a popup overlay? Just use this lightweight lightbox backbone component (basically just a view).

## HTML Template

Make sure to swap in your template compiling and loading method in `lightbox.js`. The way its coded right now will always compile the template and also look for it within the page.


## Render lightbox
{% highlight javascript %}
define(function(require){

    var Backbone = require("backbone");
    var Lightbox = require("path/to/lightbox");

    // We want to render this email form within the lightbox
    var EmailFormView = require("content/within/lightbox");
    
    var ContactView = Backbone.View.extend({

        template: "YourTemplate.handlebars",

        initialize: function(options) {
            // init logic here
        },

        events: {
            "click .email-form": "showForm"
        },

        render: function() {
            // render logic

            this.selElement($(this.template()));
            return this;
        },

        showForm: function(event) {
            this.emailForm = new EmailFormView();

            this.lightbox = new Lightbox({
                content: this.emailForm.render().el
            });

            // Calling render will show the popup
            this.lightbox.render();
        }

    });


    return ContactView;

});

{% endhighlight%}