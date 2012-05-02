(function() {

    FIR.controllers = {};

    FIR.controllers.index = function(){

    };

    FIR.controllers.invoices = function(){

        //var
        //Invoices = FIR.providers.Invoice.getAll();
        //InvoiceListView = new FIR.views.InvoiceListView({ model : Invoices});
         //console.log(Invoices);
        //InvoiceListView.render();
    };

    FIR.controllers.sales = function(){
          alert("Run Sales");
    };

    FIR.controllers.contractors = function(){
          alert("Run Contractors");
    };

    FIR.controllers.warehose = function(){
          alert("Run Warehose");
    };

    FIR.controllers.settings = function(){
          alert("Run Settings");
    };

    FIR.routers = Backbone.Router.extend({
           routes : {
              "" : "index",
              invoices : "invoices",
              sales : "sales",
              contractors : "contractors",
              warehose : "warehose",
              settings : "settings"
           },
           index: FIR.controllers.index,
           invoices: FIR.controllers.invoices,
           sales: FIR.controllers.sales,
           contractors: FIR.controllers.contractors,
           warehose: FIR.controllers.warehose,
           settings : FIR.controllers.settings
    });

}());