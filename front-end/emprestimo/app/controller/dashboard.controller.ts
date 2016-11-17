import {Emprestimo} from '../entitys/emprestimo.entity';
import {Component} from '@angular/core';
import {EmprestimoService} from '../services/emprestimo.service';

@Component({
    templateUrl: '../app/templates/dashboard.html'
    // providers: [EmprestimoService]
})
export class Dashboard {

    emprestimoService: EmprestimoService;
    emprestimos: Array<Emprestimo>;
    emprestimosARemover: Array<Emprestimo> = new Array();
    enableExcluir: boolean = true;

    constructor() {
        this.emprestimoService = EmprestimoService.getInstance();
        this.emprestimos = this.emprestimoService.getEmprestimos();
    }

    selecionar(emprestimo: Emprestimo) {
        emprestimo.selecionado = !emprestimo.selecionado;
        this.podeExcluir();
    }

    podeExcluir() {
        for (var empr of this.emprestimos) {
            if (empr.selecionado) {
                this.enableExcluir = false;
                return;
            }
        }
        this.enableExcluir = true;
    }

    remover() {
        for (var empr of this.emprestimos) {
            if (empr.selecionado) {
                this.emprestimosARemover.push(empr);
            }
        }
        if(this.emprestimosARemover != null && this.emprestimosARemover.length > 0){
            EmprestimoService.getInstance().remover(this.emprestimosARemover);
            this.emprestimosARemover = new Array();
        }
        this.podeExcluir();
    }

}