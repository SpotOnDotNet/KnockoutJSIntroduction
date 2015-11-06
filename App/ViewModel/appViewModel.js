/// <reference path="../View/111_Component.html" />
define([
    'knockout',
    'text!App/View/111_Component.html'
],
function (ko, template) {
   
    function AppViewModel(params) {
        var self = this;
        self.firstName = ko.observable(params.firstName);
        self.lastName = ko.observable(params.lastName);
        self.fullName = ko.pureComputed(function () {
                    return this.firstName() + " " + this.lastName();
            }, self);
    }
     
    return {
        viewModel: AppViewModel,
        template: template                    
    };
});