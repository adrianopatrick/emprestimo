"use strict";
var router_1 = require('@angular/router');
var controller_1 = require('./controller');
var appRoutes = [
    { path: '', component: controller_1.Dashboard },
    { path: 'dashboard', component: controller_1.Dashboard },
    { path: 'formEmprestimo', component: controller_1.FormEmprestimo }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map