import {Emprestimo} from '../entitys/emprestimo.entity';
import {Component} from '@angular/core';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
    templateUrl: '../app/templates/dashboard.html'
    // providers: [EmprestimoService]
})
export class Dashboard {

    emprestimoService: EmprestimoService;
    emprestimos: Array<Emprestimo>;

    constructor(){
        this.emprestimoService = EmprestimoService.getInstance();
        this.emprestimos = this.emprestimoService.getEmprestimos();
    }

}