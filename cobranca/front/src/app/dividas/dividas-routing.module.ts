import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from '../shared/layout/layout.component';
import {ImportarDividaComponent} from './importar-divida/importar-divida.component';
import {VisualizarDividaComponent} from "./visualizar-divida/visualizar-divida.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: ImportarDividaComponent },
      { path: 'visualizar', component: VisualizarDividaComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DividasRoutingModule { }
