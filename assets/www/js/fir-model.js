(function() {

    FIR.models = {};

    FIR.models.Invoice = Backbone.Model.extend();

    FIR.models.InvoiceCollection = Backbone.Collection.extend({

        model : FIR.models.Invoice,

    });

    FIR.providers = {};

    FIR.providers.Invoice = {};

    FIR.providers.Invoice.getAll = function()
    {
        var
        Invoice = FIR.models.Invoice,
        collection = [
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           }),
           new Invoice({
               number : "FS/10/01/2011",
               date : "25.09.2011",
               priceBrutto: "2 542 zł",
               contractor : {
                   name : "FastWhiteCat A.S"
               }

           })
        ];

        return new FIR.models.InvoiceCollection(collection);
    }



}());