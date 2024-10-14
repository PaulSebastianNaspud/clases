import { Routes } from '@angular/router';
import { AbountComponent } from './pages/abount/abount.component';
import { MisionComponent } from './pages/mision/mision.component';
import { InicioComponent } from './pages/inicio/inicio.component';

export const routes: Routes = [
    {
        path : '',
        component: InicioComponent
    },
    {
        path : 'page/abount',
        component: AbountComponent
    },
    {
        path : 'page/mision',
        component: MisionComponent
    },
];
