/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />

$(function () {
    
    var ViewModel = function() {
        var self = this;
        self.products = ko.observableArray([]);
        self.selectedProduct = ko.observable(),
        self.isChecked = ko.observable(),
        self.message = ko.observable(),
        self.isSelected = ko.observable(),
        self.detailsEnabled = ko.observable(false),

        self.enableDetails = function () {
            self.detailsEnabled(true);
        },

        self.disableDetails = function () {
            self.detailsEnabled(false);
        },
        
        self.showAlert = function()
        {
            alert('JAVA SUCKS!');
        },

        self.load = function () {
            $.each(sampleData.data.Products, function (i, p) {

                self.products.push(new models.Product()
                    .id(p.Id)
                    .name(p.Name)
                );
            });
        }
             
    };
    
    var vm = new ViewModel();
    vm.load();
    ko.applyBindings(vm);
});