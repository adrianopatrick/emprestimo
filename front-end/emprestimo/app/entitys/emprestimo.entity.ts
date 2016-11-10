export class Emprestimo {

    selecionado: boolean;
    colega: string;
    coisa: string;
    dataEmprestimo: string;
    dataPrevisao: string;
    dataDevolucao: string;

    constructor(selecionado?: boolean, colega?: string, coisa?: string, dataEmprestimo?: string, dataPrevisao?: string, dataDevolucao?: string) {
        this.selecionado = selecionado;
        this.colega = colega;
        this.coisa = coisa;
        this.dataEmprestimo = dataEmprestimo;
        this.dataPrevisao = dataPrevisao;
        this.dataDevolucao = dataDevolucao;
    }

}