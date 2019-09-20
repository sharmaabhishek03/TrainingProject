import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {tap,catchError,map} from 'rxjs/operators';
import {observable, throwError, Observable} from 'rxjs';
import { Product } from './Entities/product';

@Injectable()
export class AppService {

  producturl='https://localhost:44340/api/Products';
  headersa = new HttpHeaders().set('Content-Type', 'application/json').set('Accept','application/json');
  httpOptions = {
    headers: this.headersa
  };  


  
  constructor(private http : HttpClient) { }

  private handleError(error: any){
    console.error(error);
    return throwError(error);
  }


  Postproducts(prod:Product){
    this.http.post<Product>(this.producturl,prod,this.httpOptions).pipe(catchError(this.handleError))
  }

  addProduct(prod:Product): Observable<Product>{
    return this.http.post<Product>(this.producturl,prod,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }

  updateProduct(prod:Product):Observable<null | Product>{
    return this.http.put<Product>(this.producturl,prod,this.httpOptions).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.producturl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }

  urlcreater(id)
  {
    return "https://localhost:44340/api/Products/"+id
  }
  deleteProduct(id:number):Observable<Product>{
    const url=`${this.producturl}/${id}`;
    return this.http.delete<Product>(url,this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }


  putProduct(Prod:Product):Observable<null|Product>{
    let id=Prod.ProductID
    console.log(id)
    console.log(Prod)
    return this.http.put<Product>(this.urlcreater(id),Prod,this.httpOptions).pipe(tap(data=>console.log(data)),catchError(this.handleError))
 
  }
  getproductbyid(id){
    return this.http.get<Product[]>(this.producturl+"/"+id).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
      );
  }
  // getProductById(id){
  //   return this.http.get<Product[]>(this.producturl+"/"+id).pipe(
  //     tap(data => console.log(data)),
  //     catchError(this.handleError)
  //     );
  // }

}