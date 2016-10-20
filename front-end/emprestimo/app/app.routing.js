"use strict";
var router_1 = require('@angular/router');
var dashboard_controller_1 = require('./controller/dashboard.controller');
var appRoutes = [
    { path: '', component: dashboard_controller_1.Dashboard }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map