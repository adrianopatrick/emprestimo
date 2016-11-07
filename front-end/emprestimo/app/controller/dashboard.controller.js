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
var Dashboard = (function () {
    function Dashboard() {
        this.emprestimos = [{
                colega: 'João', dataEmprestimo: '29/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'
            },
            {
                colega: 'Maria', dataEmprestimo: '30/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: null
            }];
    }
    Dashboard.prototype.add = function (emprestimo) {
        this.emprestimos.push(emprestimo);
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