import {Component, OnInit} from "@angular/core";
import {Emprestimo} from "../entity";
import {EmprestimoService} from "../services/emprestimo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'formEmprestimo',
    templateUrl: '../app/templates/formEmprestimo.html'
})
export class FormEmprestimo implements OnInit {
    emprestimo: Emprestimo;
    emprestimoService: EmprestimoService;
    id: number;
    atualizando: boolean = false;

    constructor(private route: ActivatedRoute){
        this.emprestimoService = EmprestimoService.getInstance();
        this.emprestimo = new Emprestimo();
    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        if(this.id != null) {
            this.emprestimo = this.emprestimoService.buscarEmprestimo(this.id);
            this.atualizando = true;
        }
        console.log(this.atualizando);
    }

    salvar(){
        this.emprestimoService.addEmprestimo(this.emprestimo);
        this.emprestimo = null;
    }

    atualizar(){

    }
}