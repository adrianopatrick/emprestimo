import {Emprestimo} from '../entitys/emprestimo.entity';
import {Component} from '@angular/core';
import { EmprestimoService } from '../services/emprestimo.service';

@Component({
    templateUrl: '../app/templates/dashboard.html',
    providers: [EmprestimoService]
})
export class Dashboard {

    emprestimoService: EmprestimoService;
    emprestimos: Array<Emprestimo>;

    constructor(emprestimoService: EmprestimoService){
        this.emprestimos = emprestimoService.getEmprestimos();
        console.log("construiu");
    }

    public getEmprestimos() {
        console.log("chamou!!")
        this.emprestimos = this.emprestimoService.getEmprestimos();
    }

    public add(emprestimo: Emprestimo) {
        this.emprestimos.push(emprestimo);
    }
}