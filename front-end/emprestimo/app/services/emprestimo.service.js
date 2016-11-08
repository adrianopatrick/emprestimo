"use strict";
var EmprestimoService = (function () {
    function EmprestimoService() {
        this.emprestimos = [{
                colega: 'João', dataEmprestimo: '29/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'
            },
            {
                colega: 'Maria', dataEmprestimo: '30/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: null
            }];
    }
    EmprestimoService.prototype.getEmprestimos = function () {
        return this.emprestimos;
    };
    EmprestimoService.prototype.addEmprestimo = function (emprestimo) {
        this.emprestimos.push(emprestimo);
    };
    return EmprestimoService;
}());
exports.EmprestimoService = EmprestimoService;
//# sourceMappingURL=emprestimo.service.js.map