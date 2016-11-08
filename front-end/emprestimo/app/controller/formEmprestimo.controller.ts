import {Component, Inject, Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Emprestimo } from '../entity';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
    selector: 'formEmprestimo',
    templateUrl: '../app/templates/formEmprestimo.html',
    providers: [EmprestimoService]
})
export class FormEmprestimo {
    emprestimo: Emprestimo;
    emprestimoService: EmprestimoService;

    constructor(private router: Router, emprestimoService: EmprestimoService){
        this.emprestimoService = emprestimoService;
        this.emprestimo = new Emprestimo();
    }

    salvar(){
        this.emprestimoService.addEmprestimo(this.emprestimo);
        this.emprestimo = null;
        for(let empres in this.emprestimoService.getEmprestimos()){
            console.log(this.emprestimoService.getEmprestimos()[empres].colega);
        }
       this.router.navigate(['/dashboard']);
    }
}