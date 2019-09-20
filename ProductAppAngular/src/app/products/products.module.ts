import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductFilterPipe } from './ProductFilter.pipe';
import { ProductDetailsComponent } from './product-details.component';


const productroutes: Routes = [
  {path:'products',component: ListproductsComponent},
  {path:'addproduct',component: AddproductComponent},
  {path:'editproduct/:id',component:EditproductComponent},
  {path:'deleteproduct/:id',component:DeleteproductComponent},
  {path:'productdetails/:id',component:ProductDetailsComponent},
];


@NgModule({
  declarations: [AddproductComponent, DeleteproductComponent, EditproductComponent,ListproductsComponent,ProductFilterPipe, ProductDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(productroutes)
  ] 
})
export class ProductsModule { }
