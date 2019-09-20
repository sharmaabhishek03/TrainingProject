import { Component, OnInit, AfterViewInit } from '@angular/core'; ``
import { Routes, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit, AfterViewInit {

  products: any = [];
  searchText = "";
  showImage = false;
  imageWidth = 85;
  imageMargin = 2;
  name = "Abhishek Sharma";

  constructor(private appservice: AppService, private router: Router) { }

  ngOnInit() {
    this.appservice.getProducts().subscribe(data => {
      this.products = data;
    });

  }

  ngAfterViewInit(): void {
    setTimeout(() => this.appservice.getProducts().subscribe(data => { this.products = data; }), 200
    )
  }
  editProduct(id): void {
    this.router.navigate(['editproduct', id]);
  }
  productDetails(id): void {

    this.router.navigate(['productdetails', id])
  }
  DeleteProd(id): void {
    this.router.navigate(['deleteproduct', id])
  }


}




