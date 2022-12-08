import { Component, OnInit } from '@angular/core';

import { ProdutosService } from 'src/app/services/produtos.service';
import { Produtos } from 'src/app/models/produtos.model'; 
import { Guid } from 'guid-typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.page.html',
  styleUrls: ['./entrada.page.scss'],
})
export class EntradaPage implements OnInit {

  private produtos : Produtos
  public produtosForm : FormGroup
  public arrayProdutos : any
  public dadosProdutos : any

  constructor(
    private objProdutos : ProdutosService,
    private FormBuilder : FormBuilder){ 
      this.dadosProdutos = objProdutos.enviarProdutos()
    }

  ngOnInit() {
    this.produtos = {id: Guid.createEmpty(), nome:"", valor:"", quantidade:""}
 
    this.produtosForm = this.FormBuilder.group
    ({
       id : [this.produtos.id],
       nome : [this.produtos.nome, Validators.required],
       valor : [this.produtos.valor, Validators.required],
       quantidade : [this.produtos.quantidade, Validators.required],
  })

  this.objProdutos.listarTodos().then(arrayProdutos => {this.arrayProdutos = arrayProdutos})
  }

  enviar(){
    if (this.produtosForm.valid){
      this.objProdutos.inserir(this.produtosForm.value)
    }
  }
}
