import {Component} from '@angular/core';
import {Emprestimo} from '../entitys/emprestimo.entity';

export class ContatoService {

    emprestimos: Array<Emprestimo> = [{
        colega: 'João', dataEmprestimo: '29/03/2016',
        dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'
    },
        {
            colega: 'Maria', dataEmprestimo: '30/03/2016',
            dataPrevisao: '29/06/2016', dataDevolucao: null
        }];

    public getEmprestimos(): Array<Emprestimo> {

        return this.emprestimos;
    }

    public addEmprestimo(emprestimo : Emprestimo) {
        this.emprestimos.push(emprestimo)
    }

}