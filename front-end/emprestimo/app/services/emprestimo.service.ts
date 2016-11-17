import {Component, Injectable} from '@angular/core';
import {Emprestimo} from '../entitys/emprestimo.entity';

export class EmprestimoService {

    static instance: EmprestimoService;
    static isCreating: Boolean;
    emprestimos: Array<Emprestimo>;
    static controleId: number = 2;

    constructor() {
        this.emprestimos = [{
            selecionado: false, id: 1 ,colega: 'João', coisa: 'Livro Harry Potter', dataEmprestimo: '29/03/2016',
            dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'
        },
            {
                selecionado: false, id: 2, colega: 'Maria', coisa: 'HD externo 1TB', dataEmprestimo: '30/03/2016',
                dataPrevisao: '29/06/2016', dataDevolucao: null
            }];
    }

    static getInstance() {
        if (EmprestimoService.instance == null) {
            EmprestimoService.instance = new EmprestimoService();
        }

        return EmprestimoService.instance;
    }

    public buscarEmprestimo(id: Number) : Emprestimo{
        for(var emprestimo of this.emprestimos){
            if(emprestimo.id == id) {
                return emprestimo;
            }
        }
        return null;
    }

    public getEmprestimos(): Array<Emprestimo> {
        return this.emprestimos;
    }

    public addEmprestimo(emprestimo: Emprestimo) {
        emprestimo.id = ++EmprestimoService.controleId;
        this.emprestimos.push(emprestimo);
    }

    public atualizar(emprestimoAlterado: Emprestimo){
        for(var emprestimo of this.emprestimos) {
            if (emprestimo.id == emprestimoAlterado.id) {
                var index = this.emprestimos.indexOf(emprestimo);
                if (index > -1) {
                    this.emprestimos.slice(index, 1);
                    this.emprestimos.includes(emprestimo, index);
                }
            }
        }
    }

    public remover(emprestimos: Array<Emprestimo>){
        for(var emprestimo of emprestimos){
            var index = this.emprestimos.indexOf(emprestimo);
            if (index > -1) {
                this.emprestimos.splice(index, 1);
            }
        }
    }

}