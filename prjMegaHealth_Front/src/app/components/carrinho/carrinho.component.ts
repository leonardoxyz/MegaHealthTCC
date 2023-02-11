import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CarrinhoService } from 'src/app/components/services/carrinho.service';
import { Produto } from 'src/app/models/Produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css'],
})
export class CarrinhoComponent implements OnInit {
  public produtos: Produto[] = [];
  public totalGeral!: number;

  public quantitys: number = 1;
  private storage: Storage;
  img!: string;

  constructor() { // private carrinhoService: CarrinhoService
    this.storage = window.localStorage;
  }

  ngOnInit(): void {
    // this.carrinhoService.getProdutos()
    //   .subscribe(res => {
    //     this.produtos = res;
    //     this.totalGeral = this.carrinhoService.getPrecoTotal();
    //   })

    this.ObterProduto();
  }

  // removeItem(item: any) {
  //   this.carrinhoService.removeCartItem(item);
  // }

  adicionar(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if(!produtoLocalStorage){
      this.produtos.push(produto)
    }else{
      this.produtos = JSON.parse(produtoLocalStorage)
      this.produtos.push(produto)
    }

    localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
  }

  ObterProduto(): any {
    this.totalGeral = 0;
    var total: any = 0;
    var arredondar : any = 0
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage")
    if(produtoLocalStorage){
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos.forEach(function(a){
        total += a.price;
      })
      arredondar = total.toFixed(2)
    }
    this.totalGeral = arredondar;
    return this.produtos, this.totalGeral;
  }
  
  removerProduto(produto: Produto) {
    var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
    if(produtoLocalStorage){
      this.produtos = JSON.parse(produtoLocalStorage);
      this.produtos = this.produtos.filter(p => p.id !== produto.id);
      this.produtos
      localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos))
      this.ObterProduto()
    }
  }

  efetuarPedido(){
    localStorage.removeItem("produtoLocalStorage");
    // localStorage.refresh
  }

  mudarImagem(produto: Produto){
    if(produto.urlImage === "assets/"){
      this.img = "imagem_padrao.jpeg";
      return true;
    }else{
      this.img = "";
      return true;
    }
  }
}
