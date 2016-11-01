import { Component } from '@angular/core';
import { Emprestimo } from '../entity';

@Component({
    selector: 'formEmprestimo',
    templateUrl: '../app/templates/formEmprestimo.html'
})
export class FormEmprestimo {
    emprestimo: Emprestimo;

    constructor(){
        this.emprestimo = new Emprestimo();
    }
}