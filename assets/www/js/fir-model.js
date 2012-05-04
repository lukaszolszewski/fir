(function() {

    FIR.models = {};
    /**
     * Model Faktury
     * @type {FIR.models.Invoice}
     */
    FIR.models.Invoice = Backbone.Model.extend();

    FIR.models.InvoiceCollection = Backbone.Collection.extend({

        model : FIR.models.Invoice

    });
    /**
     * Model Kontrahent
     * @type {FIR.models.Contractor}
     */
    FIR.models.Contractor = Backbone.Model.extend({

        schema : {

            name : { dataType: 'Text', validators: ['required'] },
            nip :  { dataType: 'Text', validators: ['required'] },
            rgon : { dataType: 'Text', validators: ['required'] },
            firstname : { dataType: 'Text', validators: ['required'] },
            lastname :  { dataType: 'Text', validators: ['required'] },
            streetAddress : { dataType: 'Text', validators: ['required'] },
            city : { dataType: 'Text', validators: ['required'] },
            zipCode : { dataType: 'Text', validators: ['required'] },
            country : { dataType: 'Text', validators: ['required'] },
            phone : { dataType: 'Text', validators: ['required'] },
            email : { dataType: 'email', validators: ['required', 'email'] }

        }
    });

    FIR.models.ContractorCollection = Backbone.Collection.extend({

        model : FIR.models.Contractor

    });

    FIR.providers = {};

    FIR.providers.Contractor = {};

    FIR.providers.Contractor.getAll = function()
    {
        var Contractor = FIR.models.Contractor,
            collection = [
                new Contractor({
                    name : "Łukasz Olszewski",
                    nip : "657-255-97-11",
                    rgon: "260568650",
                    firstname : "Łukasz",
                    lastname : "Olszewski",
                    streetAddress : "ul. Warszawska 161/243",
                    city : "Kielce",
                    zipCode : "25-547",
                    country : "Poland",
                    phone : "511063950",
                    email: "asdluki@gmail.com"
                }),
                new Contractor({
                    name : "Łukasz Olszewski",
                    nip : "657-255-97-11",
                    rgon: "260568650",
                    firstname : "Łukasz",
                    lastname : "Olszewski",
                    streetAddress : "ul. Warszawska 161/243",
                    city : "Kielce",
                    zipCode : "25-547",
                    country : "Poland",
                    phone : "511063950",
                    email: "asdluki@gmail.com"
                }),
                new Contractor({
                    name : "Łukasz Olszewski",
                    nip : "657-255-97-11",
                    rgon: "260568650",
                    firstname : "Łukasz",
                    lastname : "Olszewski",
                    streetAddress : "ul. Warszawska 161/243",
                    city : "Kielce",
                    zipCode : "25-547",
                    country : "Poland",
                    phone : "511063950",
                    email: "asdluki@gmail.com"
                })
            ];

        return new FIR.models.ContractorCollection(collection);
    }

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