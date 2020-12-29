import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ImportarDividaComponent } from './importar-divida/importar-divida.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'importar-divida', component: ImportarDividaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
