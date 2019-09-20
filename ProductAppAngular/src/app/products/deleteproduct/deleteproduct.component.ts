import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Entities/product';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  prod: Product;
  constructor(private router: Router, private route: ActivatedRoute, private appservice: AppService) { }
  deleteProduct() {
    this.route.params.subscribe((data) => {
      this.appservice.deleteProduct(data.id).subscribe(data => {
        this.prod = data;
        console.log(this.prod);
      });
    })


    this.router.navigate(['products']);
  }
  Goback(): void {
    this.router.navigate(['products'])
  }
}