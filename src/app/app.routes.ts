import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { BarComponent } from './demos/bar-di-zones/bar.component';
import { TodoComponent } from './demos/todo-list/todo.component';


//export const rootRouterConfig: Routes = [
const rootRouterConfig: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},    
    { path: 'home', component: HomeComponent},
    { path: 'filmes', component: FilmesComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
    { path: 'bar', component: BarComponent },
    { path: 'todo', component: TodoComponent },
    //abordagem lazy loading de módulos
    { path: 'produtos', 
            loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
            .then(m => m.ProdutoModule)
    },
    { path: 'admin', 
            loadChildren: () => import('./admin/admin.module')
            .then(m => m.AdminModule),
            canLoad: [AuthGuard],
            canActivate: [AuthGuard]
    },
    
    { path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(rootRouterConfig, {enableTracing: false})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}