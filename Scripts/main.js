/// <reference path="knockout-3.3.0.debug.js" />
/// <reference path="text.js" />

require.config({
    baseUrl: '../../scripts',
    paths: {
        knockout: './knockout-3.3.0.debug',
        text: './text',
        appViewModel: '../App/ViewModel/111_Components'
    },
    waitSeconds: 2
});
require(['knockout', 'appViewModel', 'text'],
   function (ko, appViewModel) {
       ko.applyBindings(new appViewModel());
   }
);