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
var router_1 = require('@angular/router');
var entity_1 = require('../entity');
var emprestimo_service_1 = require('../services/emprestimo.service');
var FormEmprestimo = (function () {
    function FormEmprestimo(router, emprestimoService) {
        this.router = router;
        this.emprestimoService = emprestimoService;
        this.emprestimo = new entity_1.Emprestimo();
    }
    FormEmprestimo.prototype.salvar = function () {
        this.emprestimoService.addEmprestimo(this.emprestimo);
        this.emprestimo = null;
        for (var empres in this.emprestimoService.getEmprestimos()) {
            console.log(this.emprestimoService.getEmprestimos()[empres].colega);
        }
        this.router.navigate(['/dashboard']);
    };
    FormEmprestimo = __decorate([
        core_1.Component({
            selector: 'formEmprestimo',
            templateUrl: '../app/templates/formEmprestimo.html',
            providers: [emprestimo_service_1.EmprestimoService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, emprestimo_service_1.EmprestimoService])
    ], FormEmprestimo);
    return FormEmprestimo;
}());
exports.FormEmprestimo = FormEmprestimo;
//# sourceMappingURL=formEmprestimo.controller.js.map