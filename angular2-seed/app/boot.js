System.register(['angular2/platform/browser', './app.component2'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component2_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component2_1_1) {
                app_component2_1 = app_component2_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component2_1.AppComponent2);
        }
    }
});
//# sourceMappingURL=boot.js.map