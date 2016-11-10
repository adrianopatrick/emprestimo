"use strict";
var EmprestimoService = (function () {
    function EmprestimoService() {
        this.emprestimos = [{
                selecionado: false, colega: 'João', coisa: 'Livro Harry Potter', dataEmprestimo: '29/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'
            },
            {
                selecionado: false, colega: 'Maria', coisa: 'HD externo 1TB', dataEmprestimo: '30/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: null
            }];
    }
    EmprestimoService.getInstance = function () {
        if (EmprestimoService.instance == null) {
            EmprestimoService.instance = new EmprestimoService();
        }
        return EmprestimoService.instance;
    };
    EmprestimoService.prototype.getEmprestimos = function () {
        return this.emprestimos;
    };
    EmprestimoService.prototype.addEmprestimo = function (emprestimo) {
        this.emprestimos.push(emprestimo);
    };
    EmprestimoService.prototype.remover = function (emprestimo) {
        var index = this.emprestimos.indexOf(emprestimo, 0);
        if (index > -1) {
            this.emprestimos.splice(index, 1);
        }
    };
    return EmprestimoService;
}());
exports.EmprestimoService = EmprestimoService;
//# sourceMappingURL=emprestimo.service.js.map