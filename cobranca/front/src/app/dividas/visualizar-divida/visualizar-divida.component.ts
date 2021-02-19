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

  carregando: boolean = false;

  header = false;

  displayedColumns: string[] = ['nome','CPF'];
  dividas = [];
  paginator = {length: 0, pageSize:20, page: 0, pageSizeOptions:[20,50,10]};

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
    this.dividasService.buscarDividas(this.paginator).subscribe(retorno => {
      debugger
      this.dividas = retorno.content;
      this.paginator.length = retorno.totalElements;
      this.paginator.pageSize = retorno.numberOfElements;
      this.paginator.page = retorno.number;
    })
  }
  
}
