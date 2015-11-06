/// <reference path="F:\Sources\GitHub\Knockout\Knockout\App/View/101_Component.html" />
ko.components.register('message-editor', {
    viewModel: function (params) {
        this.text = ko.observable(params && params.initialText || '');
    },
    template: 'Message: <input data-bind="value: text" /> '
            + '(length: <span data-bind="text: text().length"></span>)'
});

ko.applyBindings();



