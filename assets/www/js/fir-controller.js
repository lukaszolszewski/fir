(function() {

    FIR.controllers = {};

    FIR.controllers.index = function(){

    };

    FIR.controllers.invoices = function(){

        (this.renderInvoices === undefined) && (this.renderInvoices = false);

        if (!this.renderInvoices){
            var
            Invoices = FIR.providers.Invoice.getAll(),
            InvoiceListView = new FIR.views.InvoiceListView({ model : Invoices});

            InvoiceListView.render();
            this.renderInvoices = true;
        }
    };

    FIR.controllers.addInvoice = function(){

    }

    FIR.controllers.sales = function(){

    };

    FIR.controllers.contractors = function(){

       (this.renderContractors === undefined) && (this.renderContractors = false);

        if (!this.renderContractors){
            var
                Contractor = FIR.providers.Contractor.getAll(),
                ContractorListView = new FIR.views.ContractorListView({ model : Contractor});

            ContractorListView.render();
            this.renderContractors = true;
        }
    };

    FIR.controllers.addContractorForm = function()
    {

        alert("form execute");

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
              addInvoice : "addInvoice",
              addContractorForm : "addContractorForm"
           },
           index: FIR.controllers.index,
           invoices: FIR.controllers.invoices,
           sales: FIR.controllers.sales,
           contractors: FIR.controllers.contractors,
           warehose: FIR.controllers.warehose,
           settings : FIR.controllers.settings,
           addInvoice : FIR.controllers.addInvoice,
           addContractorForm : FIR.controllers.addContractorForm
    });

}());