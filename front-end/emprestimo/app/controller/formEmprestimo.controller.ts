import {Component, Inject, Injectable} from '@angular/core';
import { Emprestimo } from '../entity';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
    selector: 'formEmprestimo',
    templateUrl: '../app/templates/formEmprestimo.html'
    // providers: [EmprestimoService]
})
export class FormEmprestimo {
    emprestimo: Emprestimo;
    emprestimoService: EmprestimoService;

    constructor(){
        this.emprestimoService = EmprestimoService.getInstance();
        this.emprestimo = new Emprestimo();
    }

    salvar(){
        this.emprestimoService.addEmprestimo(this.emprestimo);
        this.emprestimo = null;
       // this.router.navigate(['/dashboard']);
    }
}