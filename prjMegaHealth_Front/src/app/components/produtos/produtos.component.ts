import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Produto } from 'src/app/models/Produto';
import { environment } from 'src/environments/environment';
import { CarrinhoComponent } from '../carrinho/carrinho.component';
import { CarrinhoService } from '../services/carrinho.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos: any;
  filterCategory: any;
  searchKey: string = "";
  public searchTerm: string = '';
  public searchT = new BehaviorSubject<string>("");
  public carrinhoCompras!: CarrinhoComponent
  prod: Produto[] = [];
  constructor(private http: HttpClient, private carrinhoService: CarrinhoService, private router: Router) { }
  img: string = "";
  ngOnInit(): void {

    this.carrinhoCompras = new CarrinhoComponent();
    this.http.get("http://localhost:5270/api/Produto")
      .subscribe(produtos => {
        this.produtos = produtos;
        this.filterCategory = produtos;
        console.log(produtos);


        this.produtos.forEach((a: any) => {
          if (a.idCategory === "Ofertas") {
            a.idCategory === "Ofertas"
          }
         Object.assign(a,{total:a.price})
        });

        console.log(produtos);
      })

    this.searchT.subscribe((val: any) => {
      this.searchKey = val;
    })



  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.searchT.next(this.searchTerm);
  }

  addCart(produto: any) {
    this.carrinhoService.addCart(produto);

  }
  filter(category: string) {
    this.filterCategory = this.produtos
      .filter((a: any) => {
        if (a.idCategory === category || category === '') {
          return a;
        }
      })
  }


  comprar(produto:Produto){
    // console.log('this.produto')
    // console.log(produto)
    // localStorage.setItem('produtoLocalStoge',JSON.stringify(produto));
    this.carrinhoCompras.adicionar(produto);
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
