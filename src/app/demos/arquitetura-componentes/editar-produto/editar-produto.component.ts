import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../models/produto';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: [
  ]
})
export class EditarProdutoComponent implements OnInit {

  produto: Produto;

  constructor(
    private route: ActivatedRoute,//para pegar dados da rota
    private produtoService: ProdutoService, //injetar o servico de produto
    private router: Router //navegacao pelas rotas
  ) { }

  ngOnInit(): void {

    //encontrar o produto pelo id
    this.route.params
      .subscribe(params => {
        //console.log(params['id']);
        this.produto = this.produtoService.obterPorId(params['id']);
        //console.log(this.produto);
      });

  }

  salvar(){
    // fazer comunicacao com backend

    this.router.navigate(['/produtos']);
    //this.router.navigateByUrl('/produtos');//recarregar aplicação
  }

}
