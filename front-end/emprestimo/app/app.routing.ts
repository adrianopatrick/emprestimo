import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Dashboard, FormEmprestimo } from './controller'

const appRoutes: Routes = [
    {path: '', component: Dashboard},
    {path: 'formEmprestimo', component: FormEmprestimo}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);