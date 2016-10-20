import { Emprestimo } from '../entitys/emprestimo.entity';
import {Component} from '@angular/core';

@Component ({
    templateUrl: '../app/templates/dashboard.html'
})
export class Dashboard {
    emprestimos : Array<Emprestimo> = [{colega: 'João', dataEmprestimo: '29/03/2016', 
            dataPrevisao: '29/06/2016', dataDevolucao: '29/03/2016'},
            {colega: 'Maria', dataEmprestimo: '30/03/2016', 
            dataPrevisao: '29/06/2016', dataDevolucao: null}];


}