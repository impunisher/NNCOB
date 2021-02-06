import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { NotificacaoService } from '../../core/services/notificacao.service';
import { AutenticacaoService } from '../../core/services/auth.service';

@Component({
  selector: 'app-resetar-senha',
  templateUrl: './resetar-senha.component.html',
  styleUrls: ['./resetar-senha.component.css']
})
export class ResetarSenhaComponent implements OnInit {

  private token: string;
  email: string;
  form: FormGroup;
  loading: boolean;
  hideNovaSenha: boolean;
  hideConfirmarNovaSenha: boolean;

  constructor(private activeRoute: ActivatedRoute,
    private router: Router,
    private authService: AutenticacaoService,
    private NotificacaoService: NotificacaoService,
    private titleService: Title) {

    this.titleService.setTitle('cobranca - Password Reset');
    this.hideNovaSenha = true;
    this.hideConfirmarNovaSenha = true;
  }

  ngOnInit() {
    this.activeRoute.queryParamMap.subscribe((params: ParamMap) => {
      this.token = params.get('token');
      this.email = params.get('email');

      if (!this.token || !this.email) {
        this.router.navigate(['/']);
      }
    });

    this.form = new FormGroup({
      novaSenha: new FormControl('', Validators.required),
      novaSenhaConfirm: new FormControl('', Validators.required)
    });
  }

  resetPassword() {

    const password = this.form.get('novaSenha').value;
    const passwordConfirm = this.form.get('novaSenhaConfirm').value;

    if (password !== passwordConfirm) {
      this.NotificacaoService.openSnackBar('As senhas não coincidem');
      return;
    }

    this.loading = true;

    this.authService.resetarSenha(this.email, this.token, password, passwordConfirm)
      .subscribe(() => {
          this.NotificacaoService.openSnackBar('Sua senha foi alterada.');
          this.router.navigate(['/auth/login']);
        },
        error => {
          this.NotificacaoService.openSnackBar(error.error);
          this.loading = false;
        }
      );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
