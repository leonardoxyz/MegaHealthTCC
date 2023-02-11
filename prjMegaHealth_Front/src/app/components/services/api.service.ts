import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  public search = new BehaviorSubject<string>("")

  constructor(private http : HttpClient) { }

  postCategory (data : any) {
    return this.http.post<any>(`${environment.mainUrl}api/Categoria/`, data);
  }

  getCategory(){
    return this.http.get<any>(`${environment.mainUrl}api/Categoria/`);
  }

  putCategory(data:any, id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>(`${environment.mainUrl}api/Categoria/`+ id ,info);

  }

  deleteCategory(id: string){
    return this.http.delete(`${environment.mainUrl}api/Categoria/` + id)
  }



  //Fornecedor

  postVendor (data : any) {
    return this.http.post<any>(`${environment.mainUrl}api/Vendor/`, data);
  }

  getVendor(){
    return this.http.get<any>(`${environment.mainUrl}api/Vendor/`);
  }

  putVendor(data:any, id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>(`${environment.mainUrl}api/Vendor/`+ id ,info);

  }

  deleteVendor(id: string){
    return this.http.delete(`${environment.mainUrl}api/Vendor/` + id)
  }

  //pessoa
  getPeople(){
    return this.http.get<any>(`${environment.mainUrl}api/Pessoa/`);
  }




  //Produto


  postProduct (data : any) {
    return this.http.post<any>(`${environment.mainUrl}api/Produto/`, data);
  }

  getProduct(){
    return this.http.get<any>(`${environment.mainUrl}api/Produto/`);
  }

  putProduct(data:any, id : string){
    console.log(id, data);
    const info ={...data, id }
    return this.http.put<any>(`${environment.mainUrl}api/Produto/` + id ,info);

  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.mainUrl}api/Produto/` + id)
  }

  enviarArquivo(files: File | null){
    return this.http.post(`${environment.mainUrl}api/Produto/`, files)
  }

  //Separação

  // postClient(data : any) {
  //   return this.http.post<any>("https://localhost:7119/api/Client", data);
  // }

  // getClient(){
  //   return this.http.get<any>("https://localhost:7119/api/Client");
  // }

  // putClient(data:any,id : number){
  //   console.log(id, data);
  //   const info ={...data, id }
  //   return this.http.put<any>("https://localhost:7119/api/Client/"+ id ,info);
  // }

  // deleteClient(id:number){
  //   return this.http.delete<any>("https://localhost:7119/api/Client/"+id);
  // }
}





