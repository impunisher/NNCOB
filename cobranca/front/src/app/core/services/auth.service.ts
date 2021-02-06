import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import * as moment from 'moment';
import 'rxjs/add/operator/delay';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient,
              @Inject('LOCALSTORAGE') private localStorage: Storage) {
  }

  login(email: string, senha: string) {
    return of(true)
      .pipe(map((/*response*/) => {
        //   set token property
        //   const decodedToken = jwt_decode(response['token']);
        // armazene e-mail e token jwt no armazenamento local para manter o usuário conectado entre as atualizações da página
        this.localStorage.setItem('usuarioLogado', JSON.stringify({
          token: 'aisdnaksjdn,axmnczm',
          isAdmin: true,
          email: 'elizabeth .bathory@gmail.com',
          id: '12312323232',
          alias: 'elizabeth .bathory@gmail.com'.split('@')[0],
          expiration: moment().add(1, 'days').toDate(),
          nomeCompleto: 'Elizabeth Bathory'
        }));

        return true;
      }));
  }

  logout(): void {
    // limpar token remove o usuário do armazenamento local para fazer o logout do usuário
    this.localStorage.removeItem('usuarioLogado');
  }

  getUsuarioLogado(): any {
    // TODO: Habilitar após implementação
    // return JSON.parse(this.localStorage.getItem('usuarioLogado'));
    return {
      token: 'aisdnaksjdn,axmnczm',
      isAdmin: true,
      email: 'elizabeth .bathory@gmail.com',
      id: '12312323232',
      alias: 'elizabeth .bathory@gmail.com'.split('@')[0],
      expiration: moment().add(1, 'days').toDate(),
      nomeCompleto: 'Elizabeth Bathory',
      foto: "assets/images/user.png"
    };
  }

  resetarSenhaRequest(email: string) {
    return of(true);
  }

  alterarSenha(email: string, currentPwd: string, newPwd: string) {
    return of(true);
  }

  resetarSenha(email: string, token: string, password: string, confirmPassword: string): any {
    return of(true);
  }
}
