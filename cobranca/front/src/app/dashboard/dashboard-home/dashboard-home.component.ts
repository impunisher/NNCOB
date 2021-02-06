import { Component, OnInit } from '@angular/core';
import { NotificacaoService } from 'src/app/core/services/notificacao.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
import { AutenticacaoService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {
  usuarioLogado: any;

  constructor(private NotificacaoService: NotificacaoService,
    private authService: AutenticacaoService,
    private titleService: Title,
    private logger: NGXLogger) {
  }

  ngOnInit() {
    this.usuarioLogado = this.authService.getUsuarioLogado();
    this.titleService.setTitle('Cobrança - Início');
    this.logger.log('Dashboard loaded');

    setTimeout(() => {
      this.NotificacaoService.openSnackBar('Bem Vindo! ' + this.usuarioLogado.nomeCompleto);
    });
  }
}
