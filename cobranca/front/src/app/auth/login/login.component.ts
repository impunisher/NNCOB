import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/delay';

import { AutenticacaoService } from '../../core/services/auth.service';
import { NotificacaoService } from '../../core/services/notificacao.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading: boolean;

    constructor(private router: Router,
        private titleService: Title,
        private NotificacaoService: NotificacaoService,
        private authenticationService: AutenticacaoService) {
    }

    ngOnInit() {
        this.titleService.setTitle('Cobrança - Login');
        this.authenticationService.logout();
        this.criarForm();
    }

    private criarForm() {
        const salvarEmailUsuario = localStorage.getItem('salvarEmailUsuario');

        this.loginForm = new FormGroup({
            email: new FormControl(salvarEmailUsuario, [Validators.required, Validators.email]),
            senha: new FormControl('', Validators.required),
            lembrar: new FormControl(salvarEmailUsuario !== null)
        });
    }

    login() {
        const email = this.loginForm.get('email').value;
        const senha = this.loginForm.get('senha').value;
        const lembrar = this.loginForm.get('lembrar').value;

        this.loading = true;
        this.authenticationService
            .login(email.toLowerCase(), senha)
            .subscribe(() => {
                    if (lembrar) {
                        localStorage.setItem('salvarEmailUsuario', email);
                    } else {
                        localStorage.removeItem('salvarEmailUsuario');
                    }
                    this.router.navigate(['/']);
                },
                error => {
                    this.NotificacaoService.openSnackBar(error.error);
                    this.loading = false;
                }
            );
    }

    resetarSenha() {
        this.router.navigate(['/auth/resetar-senha-request']);
    }
}
