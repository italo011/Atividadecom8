import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produtos } from 'src/app/models/produtos.model';
import { Guid } from 'guid-typescript';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage-angular';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {

  private produtos : Produtos
  public produtosForm : FormGroup
  public arrayProdutos : any

// Criando metodos

public produtosSelecionado : any
public modoDeEdicao = false
handlerMessage: string;
roleMessage: string;
  taskList: any;

  constructor(
    private objProdutos : ProdutosService,
    private route : ActivatedRoute,
    private alertController : AlertController,
    private FormBuilder : FormBuilder,
    private produtosService : ProdutosService) { 
    }

  ngOnInit() {
    this.produtos = {id: Guid.createEmpty(), nome:"", valor:"", quantidade:""}

    // Validação
    this.produtosForm = this.FormBuilder.group
    ({
      id : [this.produtos.id],
      nome : [this.produtos.nome, Validators.required],
      valor : [this.produtos.valor, Validators.required],
      quantidade : [this.produtos.quantidade, Validators.required]
    })

    this.produtosService.listarTodos().then(arrayProdutos => {this.arrayProdutos = arrayProdutos})

    // Captar ID
    const id : string = String(this.route.snapshot.paramMap.get('id'))

    if (id != 'add'){
      this.objProdutos.filtrarProdutosId(id).then(array => this.produtos = array)
    } else {
      this.modoDeEdicao = true
    }
  }

  iniciarEdicao() {
    this.modoDeEdicao = true
  }

  encerrarEdicao() {
    const id : string = String(this.route.snapshot.paramMap.get('id'))
    if (id != 'add'){
      if (this.produtosForm.valid){
        this.objProdutos.atualizarProdutoId(id, this.produtosForm.value)
        this.modoDeEdicao = false
      }
    } else{
      if (this.produtosForm.valid){
        this.objProdutos.inserir(this.produtosForm.value)
        this.modoDeEdicao = false
      }
    }
  }

  delete(id : string) {  
    this.objProdutos.deletaDados(id)
  }
  
  enviar() {
    if (this.produtosForm.valid){
      this.produtosService.inserir(this.produtosForm.value)
    }
  }

}
