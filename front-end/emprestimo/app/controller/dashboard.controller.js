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
    function Dashboard() {
        this.emprestimosARemover = new Array();
        this.enableExcluir = true;
        this.emprestimoService = emprestimo_service_1.EmprestimoService.getInstance();
        this.emprestimos = this.emprestimoService.getEmprestimos();
    }
    Dashboard.prototype.selecionar = function (emprestimo) {
        emprestimo.selecionado = !emprestimo.selecionado;
        this.podeExcluir();
    };
    Dashboard.prototype.podeExcluir = function () {
        for (var _i = 0, _a = this.emprestimos; _i < _a.length; _i++) {
            var empr = _a[_i];
            if (empr.selecionado) {
                this.enableExcluir = false;
                return;
            }
        }
        this.enableExcluir = true;
    };
    Dashboard.prototype.remover = function () {
        for (var _i = 0, _a = this.emprestimos; _i < _a.length; _i++) {
            var empr = _a[_i];
            if (empr.selecionado) {
                this.emprestimosARemover.push(empr);
            }
        }
        if (this.emprestimosARemover != null && this.emprestimosARemover.length > 0) {
            emprestimo_service_1.EmprestimoService.getInstance().remover(this.emprestimosARemover);
            this.emprestimosARemover = new Array();
        }
        this.podeExcluir();
    };
    Dashboard = __decorate([
        core_1.Component({
            templateUrl: '../app/templates/dashboard.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Dashboard);
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.controller.js.map