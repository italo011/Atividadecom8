import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';
import { Produtos } from 'src/app/models/produtos.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.page.html',
  styleUrls: ['./novo.page.scss'],
})
export class NovoPage implements OnInit {

  private produtos : Produtos;
  public produtosForm : FormGroup
  public arrayProdutos : any

  constructor( private formBuilder : FormBuilder,
    private produtosService : ProdutosService) {}

    ngOnInit() {
      this.produtos = {id: Guid.createEmpty(), nome:"", valor:"", quantidade:""}

      this.produtosForm = this.formBuilder.group ({
        id: [this.produtos.id],
        nome: [this.produtos.nome, Validators.required],
        valor: [this.produtos.valor, Validators.required],
        quantidade: [this.produtos.quantidade, Validators.required]
      })

      this,this.produtosService.listarTodos().then(arrayProdutos => {this.arrayProdutos = this.arrayProdutos})
    }

    enviar() {
      if (this.produtosForm.valid){
        this,this.produtosService.inserir(this.produtosForm.value)
      }
    }
 }