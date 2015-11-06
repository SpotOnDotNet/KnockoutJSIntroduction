define(['knockout', 'require'], function (ko, require) {
    return function ComponentManager() {
        this.registerComponents = function (component) {

            
            var componentPath = 'App/Components/' + component;

            console.log("registering: " + componentPath);
            ko.components.register(component, {
                require: componentPath
            });
        }
    }
});