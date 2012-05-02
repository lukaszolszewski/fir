(function() {

    FIR.controllers = {};

    FIR.controllers.index = function(){

    };

    FIR.controllers.invoices = function(){

        var
        Invoices = FIR.providers.Invoice.getAll(),
        InvoiceListView = new FIR.views.InvoiceListView({ model : Invoices});

        InvoiceListView.render();
    };

    FIR.controllers.addInvoice = function(){

    }

    FIR.controllers.sales = function(){

    };

    FIR.controllers.contractors = function(){

    };

    FIR.controllers.warehose = function(){

    };

    FIR.controllers.settings = function(){

    };

    FIR.routers = Backbone.Router.extend({
           routes : {
              "" : "index",
              invoices : "invoices",
              sales : "sales",
              contractors : "contractors",
              warehose : "warehose",
              settings : "settings",
              addInvoice : "addInvoice"
           },
           index: FIR.controllers.index,
           invoices: FIR.controllers.invoices,
           sales: FIR.controllers.sales,
           contractors: FIR.controllers.contractors,
           warehose: FIR.controllers.warehose,
           settings : FIR.controllers.settings,
           addInvoice : FIR.controllers.addInvoice
    });

}());