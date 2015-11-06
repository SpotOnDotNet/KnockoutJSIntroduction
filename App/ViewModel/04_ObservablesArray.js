/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />
/// <reference path="../../Scripts/toastr.js" />

$(function () {
        
    var ViewModel = function() {
        var self = this;
        self.maxId = 0;
        self.products = ko.observableArray([]);
        self.selectedProducts = ko.observableArray([]);
        self.itemToAdd = ko.observable("");

        self.load = function () {
            var start = Date.now();

            for (var j = 0; j < sampleData.data.Products.length; j++) {
                self.products.push(new models.Product()
                    .id(sampleData.data.Products[j].Id)
                    .price(sampleData.data.Products[j].Price)
                    .name(sampleData.data.Products[j].Name)
                );
            }

            logTiming(start, 'load');
        };

        self.clear = function () {
            self.products([]);
        };

        self.loadBetter = function () {
            var start = Date.now();
            var underlayingArray = self.products();

            for (var j = 0; j < sampleData.data.Products.length; j++) {
                underlayingArray.push(new models.Product()
                    .id(sampleData.data.Products[j].Id)
                    .price(sampleData.data.Products[j].Price)
                    .name(sampleData.data.Products[j].Name)
                );
            }

            self.products.valueHasMutated();
            logTiming(start, 'load');
            self.maxId = self.products().length;
        };

        self.products.subscribe(function () {
            toastr.info('Product change');
        });
        
    };    
    

    function logTiming(start, msg) {
        console.log(msg + ' ' + (Date.now() - start) + ' ms');
    }    
    ko.applyBindings(new ViewModel);
});