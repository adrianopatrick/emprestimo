import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Dashboard } from './controller/dashboard.controller'

const appRoutes: Routes = [
    {path: '', component: Dashboard}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);