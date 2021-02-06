import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AutenticacaoService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router,
        private authService: AutenticacaoService) { }

    canActivate() {
        const user = this.authService.getUsuarioLogado();

        if (user && user.isAdmin) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
