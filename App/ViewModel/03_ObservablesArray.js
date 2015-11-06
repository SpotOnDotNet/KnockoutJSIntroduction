/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />

$(function () {

    var ViewModel = function() {
        var self = this;
        self.maxId = 0;
        self.products = ko.observableArray([]);
        self.selectedProducts = ko.observableArray([]);
        self.itemToAdd = ko.observable("");

        self.productsAreSelected = ko.computed(function () {
            return this.selectedProducts().length > 0;
        }, self);

        self.load = function () {            
            $.each(sampleData.data.Products, function (i, p) {

                self.products.push(new models.Product()
                    .id(p.Id)
                    .price(p.Price)
                    .name(p.Name)
                );
            });
            self.maxId = self.products().length;
        };

        self.addItem = function () {
            self.products.push(
                new models.Product()
                .id(self.maxId)
                .name(self.itemToAdd())
                .price(100));
            self.maxId += 1;
            self.itemToAdd("");
        };

        self.removeSelected = function () {
            self.products.removeAll(self.selectedProducts());
            self.selectedProducts([]);
        }

    };      
    
    var vm = new ViewModel();   
    vm.load();
    ko.applyBindings(vm);
});