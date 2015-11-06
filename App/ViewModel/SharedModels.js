
models = (function () {

    var Product = function () {
        this.id = ko.observable();
        this.name = ko.observable();
        this.price = ko.observable();
        this.priceWithCurrency = ko.computed(function () {
            return '$ ' + this.price();
        }, this);
    };

    var Person = function () {
        this.name = ko.observable();
        this.age = ko.observable();
    };

    return {
        Product: Product,
        Person: Person
    };

})();

