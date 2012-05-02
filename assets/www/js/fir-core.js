(function() {
    /**
    * Core of FIR Aplication
    */
    window.FIR = FIR = {};




           alert('load');
    FIR.consts = {};

    FIR.consts.MODEL = "model";
    FIR.consts.VIEW = "view";
    FIR.consts.CONTROLLER = "controller";

    /**
     * OBJECTS
     * @type {Object}
     */
    FIR.model = {};
    FIR.view = {};
    FIR.controller = {};

    FIR.init = function()
    {
            $.mobile.allowCrossDomainPages = true;
            alert('init');
    }

    FIR.run = function() {

        var callback = this, context = this, args = [];

        for(var index in arguments)
        {
            if (typeof(arguments[index]) === "object"){
                args = arguments[index];
                break;
            }
            if (!callback[arguments[index]]) {
              var msg = "Element " + arguments[index] + " is undefined!";
              throw msg;
            }
            context = callback;
            callback = callback[arguments[index]];
        }
        callback.apply(context, args);
    }

    FIR.view.invoice = {};
    FIR.model.invoice = {};

    FIR.controller.invoice = {
        "model" : FIR.model.invoice,
        "view" : FIR.view.invoice
    };

    FIR.view.invoice.init = function(){
        //$.mobile.listview.prototype.options.filterPlaceholder = "aaa";
    };

    FIR.view.invoice.createList = function(invoices){

        var invoiceList = $("#invoiceList").get(0),
            invoiceListClone = invoiceList.cloneNode(true);

        for(var index in invoices)
        {
            var invoice = invoices[index];

            invoiceListClone = this.insertElement(invoiceListClone, invoice);
        }

        invoiceList.parentNode.replaceChild(invoiceListClone, invoiceList);
    };

    FIR.view.invoice.createElementInvoice = function(invoice){
          return (new EJS({url: 'template/list_item_invoice.ejs'}))
              .render(invoice);
    };

    FIR.view.invoice.insertElement = function(list, invoice){
        /**
         * TODO: fast inner HTML
         */
        $(list).append(this.createElementInvoice(invoice));

        return list;
    };

    FIR.controller.invoice.init = function(param){
        console.log(this.view);
        this.view.init();
        this.view.createList(this.model.getAll());
    };

    FIR.model.invoice.getAll = function(){
        return [
            {
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },
            {
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            },{
                number : "FS/10/01/2011",
                date : "25.09.2011",
                priceBrutto: "2 542 zł",
                contractor : {
                    name : "FastWhiteCat A.S"
                }

            }
        ]
    }

}());


