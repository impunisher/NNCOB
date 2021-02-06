import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DividasRoutingModule} from './dividas-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ImportarDividaComponent} from './importar-divida/importar-divida.component';
import {VisualizarDividaComponent} from "./visualizar-divida/visualizar-divida.component";

@NgModule({
  imports: [
    CommonModule,
    DividasRoutingModule,
    SharedModule
  ],
  declarations: [
    ImportarDividaComponent,
    VisualizarDividaComponent
  ],
  entryComponents: [
  ]
})
export class DividasModule { }
