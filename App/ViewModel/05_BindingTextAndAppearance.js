/// <reference path="../../Scripts/knockout-3.3.0.debug.js" />

$(function () {

    var ViewModel = function() {
        var self = this;
        self.messageVisible = ko.observable(true);
        self.message = ko.observable("Tekst 1 Teskt 1 Tekst 1 Teskt 1 Tekst 1 Teskt 1");
        self.list = ko.observable("<ul><li>Pierwszy</li><li>Drugi</li></ul>");
        self.isActive = ko.observable(true);
        self.titleMsg= ko.observable(".... z tego modułu")

    };

    ko.applyBindings(new ViewModel);
});