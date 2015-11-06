/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />

$(function () {
    
    var ViewModel = function() {
        var self = this;
        self.products = ko.observableArray([]);              
        self.itemToAdd = ko.observable("");

        self.load = function () {               
            $.each(sampleData.data.Products, function (i, p) {

                self.products.push(new models.Product()
                    .id(p.Id)
                    .price(p.Price)
                    .name(p.Name)
                );
            });            
        },

        self.addItem = function () {
            self.products.push(
                new models.Product()
                .name(self.itemToAdd()));        
            self.itemToAdd("");
        },

        self.addOnEnter = function (data, event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13)
            {
                self.addItem();
            }
            return true;
        }
    };

    var vm = new ViewModel();
    vm.load();
    ko.applyBindings(vm);
});