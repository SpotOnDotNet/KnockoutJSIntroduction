/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />

$(function () {
    var ViewModel = function() {
        var self = this;
        self.productName = ko.observable("JAVA");
        self.price = ko.observable(25);
        self.hour = ko.observable(1);

        

        self.totalPrice = ko.computed({
            read: function () {
                var extPrice = this.price() * this.hour();
                return extPrice.toFixed(2);
            },
            write: function (value) {
                var newPrice = value / this.hour()
                this.price(newPrice.toFixed(2));
            },
            owner: self
        });

        self.priceWithCurrency = ko.computed(function () {
            return self.totalPrice() + ' zł';
        });
    };

    ko.applyBindings(new ViewModel);
})