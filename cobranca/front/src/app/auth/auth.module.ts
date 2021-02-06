import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ResetarSenhaRequestComponent } from './resetar-senha-request/resetar-senha-request.component';
import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [LoginComponent, ResetarSenhaRequestComponent, ResetarSenhaComponent]
})
export class AuthModule { }
