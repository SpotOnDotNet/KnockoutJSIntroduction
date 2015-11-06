/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />

$(function () {
    var ViewModel = function() {
        var self = this;
        self.firstName = ko.observable();
    };
        
    ko.applyBindings(new ViewModel());
})