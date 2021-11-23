import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDescriptionComponent } from './Product/product-description/product-description.component';
import { ProductListComponent } from './Product/product-list/product-list.component';

const routes: Routes = [
  {path:'product-list', component:ProductListComponent},
  {path:'product-description', component:ProductDescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
