import {Component, Injectable} from '@angular/core';
import {Emprestimo} from '../entitys/emprestimo.entity';

export class EmprestimoService {

    static instance: EmprestimoService;
    static isCreating: Boolean;
    emprestimos: Array<Emprestimo>;

    constructor(){
        this.emprestimos = [{
            colega: 'João', dataEmprestimo: '29/03/2016',
            dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'
        },
            {
                colega: 'Maria', dataEmprestimo: '30/03/2016',
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

    public addEmprestimo(emprestimo : Emprestimo) {
        this.emprestimos.push(emprestimo);
    }

}