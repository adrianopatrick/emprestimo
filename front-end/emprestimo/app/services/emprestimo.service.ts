import {Component, Injectable} from '@angular/core';
import {Emprestimo} from '../entitys/emprestimo.entity';

export class EmprestimoService {

    static instance: EmprestimoService;
    static isCreating: Boolean;
    emprestimos: Array<Emprestimo>;

    constructor() {
        this.emprestimos = [{
            selecionado: false, colega: 'João', coisa: 'Livro Harry Potter', dataEmprestimo: '29/03/2016',
            dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'
        },
            {
                selecionado: false, colega: 'Maria', coisa: 'HD externo 1TB', dataEmprestimo: '30/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: null
            }];
    }

    static getInstance() {
        if (EmprestimoService.instance == null) {
            EmprestimoService.instance = new EmprestimoService();
        }

        return EmprestimoService.instance;
    }

    public getEmprestimos(): Array<Emprestimo> {
        return this.emprestimos;
    }

    public addEmprestimo(emprestimo: Emprestimo) {
        this.emprestimos.push(emprestimo);
    }

    public remover(emprestimo: Emprestimo){
        var index = this.emprestimos.indexOf(emprestimo, 0);
        if (index > -1) {
            this.emprestimos.splice(index, 1);
        }
    }

}