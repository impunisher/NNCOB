import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { SharedModule } from '../shared/shared.module';
import { TrocarSenhaComponent } from './trocar-senha/trocar-senha.component';
import {DetalhesPerfilComponent} from "./detalhes-perfil/detalhes-perfil.component";
import {FileUploadModule} from "primeng/fileupload";


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ContaRoutingModule,
        FileUploadModule
    ],
  declarations: [PerfilComponent, TrocarSenhaComponent, DetalhesPerfilComponent],
  exports: [PerfilComponent]
})
export class ContaModule { }
