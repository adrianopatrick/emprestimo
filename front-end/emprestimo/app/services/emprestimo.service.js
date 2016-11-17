"use strict";
var EmprestimoService = (function () {
    function EmprestimoService() {
        this.emprestimos = [{
                selecionado: false, id: 1, colega: 'João', coisa: 'Livro Harry Potter', dataEmprestimo: '29/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'
            },
            {
                selecionado: false, id: 2, colega: 'Maria', coisa: 'HD externo 1TB', dataEmprestimo: '30/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: null
            }];
    }
    EmprestimoService.getInstance = function () {
        if (EmprestimoService.instance == null) {
            EmprestimoService.instance = new EmprestimoService();
        }
        return EmprestimoService.instance;
    };
    EmprestimoService.prototype.buscarEmprestimo = function (id) {
        for (var _i = 0, _a = this.emprestimos; _i < _a.length; _i++) {
            var emprestimo = _a[_i];
            if (emprestimo.id == id) {
                return emprestimo;
            }
        }
        return null;
    };
    EmprestimoService.prototype.getEmprestimos = function () {
        return this.emprestimos;
    };
    EmprestimoService.prototype.addEmprestimo = function (emprestimo) {
        emprestimo.id = ++EmprestimoService.controleId;
        this.emprestimos.push(emprestimo);
    };
    EmprestimoService.prototype.atualizar = function (emprestimoAlterado) {
        for (var _i = 0, _a = this.emprestimos; _i < _a.length; _i++) {
            var emprestimo = _a[_i];
            if (emprestimo.id == emprestimoAlterado.id) {
                var index = this.emprestimos.indexOf(emprestimo);
                if (index > -1) {
                    this.emprestimos.slice(index, 1);
                    this.emprestimos.includes(emprestimo, index);
                }
            }
        }
    };
    EmprestimoService.prototype.remover = function (emprestimos) {
        for (var _i = 0, emprestimos_1 = emprestimos; _i < emprestimos_1.length; _i++) {
            var emprestimo = emprestimos_1[_i];
            var index = this.emprestimos.indexOf(emprestimo);
            if (index > -1) {
                this.emprestimos.splice(index, 1);
            }
        }
    };
    EmprestimoService.controleId = 2;
    return EmprestimoService;
}());
exports.EmprestimoService = EmprestimoService;
//# sourceMappingURL=emprestimo.service.js.map