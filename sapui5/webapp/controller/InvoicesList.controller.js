//@ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
],
/**
 * 
 * @param {type sap.ui.core.mvc.Controller } Controller
 * @param {type sap.ui.model.json.JSONModel } JSONModel  esta es una prueba
 */
function(Controller,JSONModel) {

    return Controller.extend("ns.sapui5.controller.InvoicesList", {

         onInit: function () {
            var oViewModel = new JSONModel ({
                usd: "USD",
                eur: "EUR"
            });
            this.getView().setModel(oViewModel, "currency");
        }

    });
});
