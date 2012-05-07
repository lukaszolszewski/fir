(function(){

    FIR.views = {};
    /**
    *  VIEW: Item list of invoice
    */
    FIR.views.InvoiceListItemView = Backbone.View.extend({

        tagName: "li",

        template: _.template($('#invoice-list-item').html()),

        render: function(eventName) {

            $(this.el).html(this.template(this.model.toJSON()));
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
    /**
     *
     * @type {FIR.views.InvoiceListItemView}
     */
    FIR.views.ContractorListItemView = Backbone.View.extend({

        tagName: "li",

        template: _.template($('#contractor-list-item').html()),

        render: function(eventName) {

            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });
    /**
     *
     * @type {FIR.views.ContractorListView}
     */
    FIR.views.ContractorListView = Backbone.View.extend({

        el: $('#contractorList'),

        initialize: function() {
            //this.model.bind("reset", this.render, this);
        },

        render: function(eventName) {

            _.each(this.model.models, function(invoice) {
                $(this.el).append(new FIR.views.ContractorListItemView({model: invoice}).render().el);
            }, this);

            return this;
        }
    });
    /**
     *
     * @type {FIR.views.contractorFormView}
     */
    FIR.views.ContractorFormView = Backbone.View.extend({

        el: $('#contractorForm'),

        initialize: function() {
        },

        render: function(eventName) {

            var form = this.options.form.render();

            console.log(form.el);

            $(this.el).append(form.el);

            return this;
        }
    });

}());