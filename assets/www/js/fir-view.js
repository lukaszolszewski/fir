(function(){

    FIR.views = {};
    /**
    *  VIEW: Item list of invoice
    */
    FIR.views.InvoiceListItemView = Backbone.View.extend({

        tagName: "li",

        template: _.template($('#invoice-list-item').html()),

        render: function(eventName) {

            console.log(this.model.toJSON());
            //$(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });
    /**
    *  VIEW: List of Invoice
    */
    FIR.views.InvoiceListView = Backbone.View.extend({

        el: $('#invoiceList'),

        initialize: function() {
            this.model.bind("reset", this.render, this);
        },

        render: function(eventName) {

            _.each(this.model.models, function(invoice) {
                $(this.el).append(new FIR.views.InvoiceListItemView({model: invoice}).render().el);
            }, this);

            return this;
        }
    });

}());