import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Provider } from '@angular/core';
//import { RouterModule } from '@angular/router'; modulo de roteamento foi separado
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { NgBrazil } from 'ng-brazil';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';

import { AppComponent } from './app.component';
//import { MenuComponent } from './navegacao/menu/menu.component';
//import { HomeComponent } from './navegacao/home/home.component';
//import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
//import { rootRouterConfig } from './app.routes'; modulo de roteamento foi separado
import { CadastroComponent } from './demos/reactiveforms/cadastro/cadastro.component';
import { NavegacaoModule } from './navegacao/navegacao.module';

import { AppRoutingModule } from './app.routes';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';
import { FilmesComponent } from './demos/pipes/filmes/filmes.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FileSizePipe } from './demos/pipes/filmes/file.pipe';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { BarModule } from './demos/bar-di-zones/bar.module';
import { BarServices } from './demos/bar-di-zones/bar.service';
import { HttpClientModule } from '@angular/common/http';
import { TodoModule } from './demos/todo-list/todo.modulo';
registerLocaleData(localePt);

//import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
//import { ProdutoDashboardComponent } from './demos/arquitetura-componentes/produto-dashboard/produto-dashboard.component'; // retirar pq foi add automatico

export const BAR_PROVIDERS: Provider[] = [
  BarServices
];

@NgModule({
  declarations: [
    AppComponent,
    //MenuComponent,
    //HomeComponent,
    //FooterComponent,    
    SobreComponent,
    CadastroComponent,
    FilmesComponent,
    FileSizePipe,    
    ImageFormaterPipe    
    //AdminDashboardComponent    
    //ProdutoDashboardComponent remover pq foi add automatico
  ],
  imports: [
    BarModule.forRoot({
      unidadeId: 1000,
      unidadeToken: 'eca32ads3f2df23asdf2' 
    }),
    NavegacaoModule,//modulo separado
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgBrazil,
    TextMaskModule,
    CustomFormsModule,
    HttpClientModule,
    TodoModule,
    //[RouterModule.forRoot(rootRouterConfig, { useHash: false})]
    AppRoutingModule//modulo de roteamento separado    
  ],
  providers: [
    //{provide: APP_BASE_HREF, useValue: '/'} coloca no index.html principal
    AuthGuard,
    CadastroGuard
    //BAR_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
