import { Subscription } from 'rxjs';
import { DividasService } from './../dividas.service';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {NGXLogger} from 'ngx-logger';
import {Title} from '@angular/platform-browser';

import {NotificacaoService} from '../../core/services/notificacao.service';
import {NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';

@Component({
  selector: 'app-importar-divida',
  templateUrl: './importar-divida.component.html',
  styleUrls: ['./importar-divida.component.css']
})
export class ImportarDividaComponent implements OnInit {


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
    this.titleService.setTitle('Cobrança - Importar Dívida');
    this.logger.log('Dividas loaded');

  }

  lerArquivo(event: any) {
    this.carregando = true;
    const files = event.srcElement.files;
    this.dividasService.importarDados(files).subscribe(response => console.log('Upload concluído'));
  }
}
