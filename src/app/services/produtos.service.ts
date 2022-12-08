import { Injectable } from '@angular/core';
// imports
import { Produtos } from '../models/produtos.model';
import { Guid } from 'guid-typescript';
import { Storage } from '@ionic/storage-angular';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  splice(index: any, id: string) {
    throw new Error('Method not implemented.');
  }

private todosProdutos = []

  constructor(
    private storage: Storage
  ) { }

    // Insert
    inserir(argumento : Produtos){
      argumento.id = Guid.create()
      this.storage.set(argumento.id.toString(), JSON.stringify(argumento))
    }
  
    // Read
    async listarTodos(){
  
      let arrayProdutos: Produtos [] = [];
  
      await this.storage.forEach((value: string) =>
      {const produtos: Produtos = JSON.parse(value); arrayProdutos.push(produtos)})
  
      return arrayProdutos
    }

      // Delete
  deletaDados(id : string){
    //  this.todosProdutos.splice(this.todosProdutos.indexOf(produtosRecebidos), 1)
    this.storage.remove(id)
  }

  
  
  // Create
  enviarProdutos(){
    return this.todosProdutos
  }

  async filtrarProdutosId(id:string){
    return JSON.parse(await this.storage.get(id))
  }


  /*recebeDados(produtosRecebidos : any){
     produtosRecebidos.id = this.todosProdutos.length + 1
     this.todosProdutos.push(produtosRecebidos)
   }*/
   




  // Update
  atualizarProdutoId(id : string, produtosRecebidos : Produtos){
    produtosRecebidos.id = Guid.parse(id)
    this.storage.set(produtosRecebidos.id.toString(), JSON.stringify(produtosRecebidos))
  }
}

