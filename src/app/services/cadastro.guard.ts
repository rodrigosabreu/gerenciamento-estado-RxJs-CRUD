import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { CadastroComponent } from "../demos/reactiveforms/cadastro/cadastro.component";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent>{
    
    user = { admin: true, logged: true};
    
    canDeactivate(component: CadastroComponent){

        if(component.mudancasNaoSalvas){
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');
        }
        return true;
    }

    
}