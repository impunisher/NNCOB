import { NotificacaoService } from '../../core/services/notificacao.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

import { AutenticacaoService } from './../../core/services/auth.service';
import { SpinnerService } from './../../core/services/spinner.service';

@Component({
  selector: 'app-trocar-senha',
  templateUrl: './trocar-senha.component.html',
  styleUrls: ['./trocar-senha.component.css']
})
export class TrocarSenhaComponent implements OnInit {

  form: FormGroup;
  hideCurrentPassword: boolean;
  hidenovaSenha: boolean;
  currentPassword: string;
  novaSenha: string;
  novaSenhaConfirm: string;
  disableSubmit: boolean;

  constructor(private authService: AutenticacaoService,
    private logger: NGXLogger,
    private spinnerService: SpinnerService,
    private notificacaoService: NotificacaoService) {

    this.hideCurrentPassword = true;
    this.hidenovaSenha = true;
  }

  ngOnInit() {
    this.form = new FormGroup({
      currentPassword: new FormControl('', Validators.required),
      novaSenha: new FormControl('', Validators.required),
      novaSenhaConfirm: new FormControl('', Validators.required),
    });

    this.form.get('currentPassword').valueChanges
      .subscribe(val => { this.currentPassword = val; });

    this.form.get('novaSenha').valueChanges
      .subscribe(val => { this.novaSenha = val; });

    this.form.get('novaSenhaConfirm').valueChanges
      .subscribe(val => { this.novaSenhaConfirm = val; });

    this.spinnerService.visibility.subscribe((value) => {
      this.disableSubmit = value;
    });
  }

  changePassword() {

    if (this.novaSenha !== this.novaSenhaConfirm) {
      this.notificacaoService.openSnackBar('As novas senhas não coincidem.');
      return;
    }

    const email = this.authService.getUsuarioLogado().email;

    this.authService.alterarSenha(email, this.currentPassword, this.novaSenha)
      .subscribe(
        data => {
          this.logger.info(`Usuário ${email} alterou a senha.`);
          this.form.reset();
          this.notificacaoService.openSnackBar('Sua senha foi alterada com sucesso.');
        },
        error => {
          this.notificacaoService.openSnackBar(error.error);
        }
      );
  }
}
