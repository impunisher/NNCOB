import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

import {AutenticacaoService} from '../../core/services/auth.service';
import {NotificacaoService} from '../../core/services/notificacao.service';

@Component({
  selector: 'app-resetar-senha-request',
  templateUrl: './resetar-senha-request.component.html',
  styleUrls: ['./resetar-senha-request.component.css']
})
export class ResetarSenhaRequestComponent implements OnInit {

  private email: string;
  form: FormGroup;
  loading: boolean;

  constructor(private authService: AutenticacaoService,
    private NotificacaoService: NotificacaoService,
    private titleService: Title,
    private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('Cobrança - Resetar Senha');

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });

    this.form.get('email').valueChanges
      .subscribe((val: string) => { this.email = val.toLowerCase(); });
  }

  resetarSenha() {
    this.loading = true;
    this.authService.resetarSenhaRequest(this.email)
      .subscribe(() => {
          this.router.navigate(['/auth/login']);
          this.NotificacaoService.openSnackBar('O e-mail de verificação de senha foi enviado para seu endereço de e-mail.');
        },
        error => {
          this.loading = false;
          this.NotificacaoService.openSnackBar(error.error);
        }
      );
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
