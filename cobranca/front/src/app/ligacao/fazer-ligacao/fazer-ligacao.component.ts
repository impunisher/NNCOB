import {Component, OnInit} from '@angular/core';
import {NGXLogger} from 'ngx-logger';
import {Title} from '@angular/platform-browser';

import {NotificacaoService} from '../../core/services/notificacao.service';

import * as Vonix from '../../../assets/vonix/vonix-1.6.min.js'


@Component({
  selector: 'app-fazer-ligacao',
  templateUrl: './fazer-ligacao.component.html',
  styleUrls: ['./fazer-ligacao.component.css'],
  inputs: ['Vonix'],
})

export class FazerLigacaoComponent implements OnInit {

  header = false;
  vonix_agent: any;


  constructor(
    private logger: NGXLogger,
    private NotificacaoService: NotificacaoService,
    private titleService: Title,
  )
   { }

  ngOnInit() {
    this.titleService.setTitle('Cobrança - Fazer Ligação');
    this.logger.log('Ligações loaded');
  }

  discar() {
    //definir discador do agent
    this.vonix_agent = new Vonix('provision-lab.vonix.com.br', '');
    this.logger.log(this.vonix_agent.status(), 'vonix discar')

  }
}
