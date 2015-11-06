/// <reference path="knockout-3.3.0.debug.js" />
/// <reference path="text.js" />

require.config({
    baseUrl: '/',
    shim: {
        'bootstrap': { deps: ['jquery'] }
    },
    paths: {
        'jquery' : 'Scripts/jquery-2.1.4.min',
        'bootstrap' :  'Scripts/bootstrap.min',  
        'knockout': 'Scripts/knockout-3.3.0.debug',
        'text': 'Scripts/text',
        'componentManager': 'Scripts/ko-componentManager',       
    },
    waitSeconds: 2
});
require(['knockout', 'App/ViewModel/MainViewModel'],
   function (ko, MainViewModel) {       
       ko.applyBindings(new MainViewModel());
   }
);