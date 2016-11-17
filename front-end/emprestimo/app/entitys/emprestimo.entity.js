"use strict";
var Emprestimo = (function () {
    function Emprestimo(selecionado, id, colega, coisa, dataEmprestimo, dataPrevisao, dataDevolucao) {
        this.selecionado = selecionado;
        this.id = id;
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