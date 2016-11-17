export class Emprestimo {

    selecionado: boolean;
    id: number;
    colega: string;
    coisa: string;
    dataEmprestimo: string;
    dataPrevisao: string;
    dataDevolucao: string;

    constructor(selecionado?: boolean, id?:number, colega?: string, coisa?: string, dataEmprestimo?: string, dataPrevisao?: string, dataDevolucao?: string) {
        this.selecionado = selecionado;
        this.id = id;
        this.colega = colega;
        this.coisa = coisa;
        this.dataEmprestimo = dataEmprestimo;
        this.dataPrevisao = dataPrevisao;
        this.dataDevolucao = dataDevolucao;
    }

}