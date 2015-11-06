/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />

$(function () {
       
    var ViewModel = function() {
        var self = this;
        self.products = ko.observableArray([]),
        self.displayMessage = ko.observable(),
        self.person = ko.observable(),
        
        self.load  = function () {        
            $.each(sampleData.data.Products, function (i, p) {

                self.products.push(new models.Product()
                    .price(p.Price)
                    .name(p.Name)
                );
            });

            self.person = new models.Person()
                    .name("Edek")
                    .age(25);
        }
    };
    
    var vm = new ViewModel();

    vm.displayMessage(true);

    vm.load();
    ko.applyBindings(vm);
});