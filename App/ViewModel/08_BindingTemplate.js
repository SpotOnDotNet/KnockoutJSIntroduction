/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />

$(function () {
    
    var ViewModel = function() {
        var self = this;
        self.products = ko.observableArray([]);
        self.person = ko.observable();
        self.itemToAdd = ko.observable("");

        self.load = function () {
            $.each(sampleData.data.Products, function (i, p) {

                self.products.push(new models.Product()
                    .id(p.Id)
                    .price(p.Price)
                    .name(p.Name)
                );
            });
            self.person = new models.Person()
                 .name("Jan")
                 .age(22);
        };

        self.addItem = function () {
            self.products.push(
                new models.Product()
                .name(vm.itemToAdd()));
            self.itemToAdd("");
        };
    };

    var vm = new ViewModel();
    vm.load();
    ko.applyBindings(vm);
});