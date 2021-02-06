import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LigacaoRoutingModule } from './ligacao-routing.module';
import { SharedModule } from '../shared/shared.module';
import {FazerLigacaoComponent} from "./fazer-ligacao/fazer-ligacao.component";
import {ButtonModule} from "primeng/button";

@NgModule({
  imports: [
    CommonModule,
    LigacaoRoutingModule,
    SharedModule,
    ButtonModule
  ],
  declarations: [
    FazerLigacaoComponent
  ],
  entryComponents: [
  ]
})
export class LigacaoModule { }
