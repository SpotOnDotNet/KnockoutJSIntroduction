define(['knockout', 'componentManager'], function (ko, ComponentManager) {
    return function MainViewModel() {
        var self = this;

        var componentManager = new ComponentManager();
        componentManager.registerComponents( 'admin-header' );       
    }
});
   