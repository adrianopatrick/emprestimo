import {Component, Inject, Injectable} from '@angular/core';
import { Emprestimo } from '../entity';
import { Dashboard } from 'dashboard.controller';

@Component({
    selector: 'formEmprestimo',
    templateUrl: '../app/templates/formEmprestimo.html',
    providers: [Dashboard]
})
@Injectable()
export class FormEmprestimo {
    emprestimo: Emprestimo;
    dashboard = Dashboard;

    constructor(_dashboard? : Dashboard){
        this.emprestimo = new Emprestimo();
    }

    salvar(){
        this.dashboard.add(this.emprestimo);
    }
}