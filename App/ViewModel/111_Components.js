/// <reference path="../View/111_Component.html" />
define([
    'knockout',
    'text'
],
function (ko) {
   
    return function appViewModel() {
        ko.components.register("user", {
            viewModel: function (params) {
                this.firstName = ko.observable(params.firstName);
                this.lastName = ko.observable(params.lastName);
                this.fullName = ko.pureComputed(function () {
                    return this.firstName() + " " + this.lastName();
                }, this);
            },
            template: {
                require:
                    'text!../App/View/111_Component.html'
            }
        });
    };


});