import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ResetarSenhaRequestComponent } from './resetar-senha-request/resetar-senha-request.component';
import { ResetarSenhaComponent } from './resetar-senha/resetar-senha.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'resetar-senha-request', component: ResetarSenhaRequestComponent },
  { path: 'resetar-senha', component: ResetarSenhaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
