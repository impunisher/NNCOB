import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import * as moment from 'moment';

import { AutenticacaoService } from '../services/auth.service';
import { NotificacaoService } from '../services/notificacao.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router,
        private NotificacaoService: NotificacaoService,
        private authService: AutenticacaoService) { }

    canActivate() {
        const user = this.authService.getUsuarioLogado();

        if (user && user.expiration) {

            if (moment() < moment(user.expiration)) {
                return true;
            } else {
                this.NotificacaoService.openSnackBar('Sua sessão expirou');
                this.router.navigate(['auth/login']);
                return false;
            }
        }

        this.router.navigate(['auth/login']);
        return false;
    }
}
