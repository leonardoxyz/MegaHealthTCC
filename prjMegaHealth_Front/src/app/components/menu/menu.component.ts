import { MenuService } from './menu.service';
import { Categoria } from 'src/app/models/Categoria';
import { Produto } from 'src/app/models/Produto';
import { ApiService } from '../services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public categoria!: Categoria[]
  public produto!: Produto[]
  public searchTerm : string = ''
  constructor(
    private menuService: MenuService,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getCategoria();
  }

  getCategoria(){
    this.menuService.getAll().subscribe(
      (res:Categoria[]) => {
        this.categoria = res;
      }
    )
  }

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm)
    this.apiService.search.next(this.searchTerm)
  }

  categoriaSelect(categoria:Categoria){
 
  }

  testarNome(){
    let name = localStorage.getItem('name')
    if(name === 'Admin'){
      return true;
    }else{
      return false;
    }
  }
}
