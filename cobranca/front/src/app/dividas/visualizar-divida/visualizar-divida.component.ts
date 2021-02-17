import { DividasService } from './../dividas.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {NGXLogger} from 'ngx-logger';
import {Title} from '@angular/platform-browser';

import {NotificacaoService} from '../../core/services/notificacao.service';
import {NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';

@Component({
  selector: 'app-visualizar-divida',
  templateUrl: './visualizar-divida.component.html',
  styleUrls: ['./visualizar-divida.component.css']
})
export class VisualizarDividaComponent implements OnInit {


  @ViewChild(MatSort, { static: true }) sort: MatSort;

  csvRecords: any[] = [];
  csvHeaders: any[] = [];
  carregando: boolean = false;

  header = false;

  constructor(
    private logger: NGXLogger,
    private NotificacaoService: NotificacaoService,
    private titleService: Title,
    private ngxCsvParser: NgxCsvParser,
    private dividasService: DividasService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Cobrança - Visulizar dividas');
    this.logger.log('Dividas loaded');
    this.buscarDividas();
  }

  dividas = [];

  buscarDividas(){
    this.dividasService.buscarDividas().subscribe(dividasConsulta => {
      debugger;
      this.dividas = dividasConsulta;
    })
  }

  
}
