"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var emprestimo_service_1 = require('../services/emprestimo.service');
var Dashboard = (function () {
    function Dashboard(emprestimoService) {
        this.emprestimos = emprestimoService.getEmprestimos();
        console.log("construiu");
    }
    Dashboard.prototype.getEmprestimos = function () {
        console.log("chamou!!");
        this.emprestimos = this.emprestimoService.getEmprestimos();
    };
    Dashboard.prototype.add = function (emprestimo) {
        this.emprestimos.push(emprestimo);
    };
    Dashboard = __decorate([
        core_1.Component({
            templateUrl: '../app/templates/dashboard.html',
            providers: [emprestimo_service_1.EmprestimoService]
        }), 
        __metadata('design:paramtypes', [emprestimo_service_1.EmprestimoService])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.controller.js.map