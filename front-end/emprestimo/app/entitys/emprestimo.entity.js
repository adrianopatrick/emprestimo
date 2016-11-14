"use strict";
var Emprestimo = (function () {
    function Emprestimo(selecionado, colega, coisa, dataEmprestimo, dataPrevisao, dataDevolucao) {
        this.selecionado = selecionado;
        this.colega = colega;
        this.coisa = coisa;
        this.dataEmprestimo = dataEmprestimo;
        this.dataPrevisao = dataPrevisao;
        this.dataDevolucao = dataDevolucao;
    }
    return Emprestimo;
}());
exports.Emprestimo = Emprestimo;
//# sourceMappingURL=emprestimo.entity.js.map