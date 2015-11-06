define(['knockout', 'text!./admin-header.html'],
function(ko, template){

    function AdminHeaderModel(params){
        var self = this;
        self.pageTitle = ko.observable(params && params.pageTitle || 'Test');
    }
    
    return {
        viewModel: AdminHeaderModel,
        template: template
    };
});