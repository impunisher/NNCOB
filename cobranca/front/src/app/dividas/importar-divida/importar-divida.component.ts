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
    private ngxCsvParser: NgxCsvParser
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Cobrança - Importar Dívida');
    this.logger.log('Dividas loaded');

  }

  lerArquivo(event: any) {
    this.carregando = true;
    const files = event.srcElement.files;

    // Parse the file you want to select for the operation along with the configuration
    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
        .pipe().subscribe((result: any) => {
      let primeiroItem: boolean = true;
      result.forEach((element: any) => {
        const row: string = element[0];
        if(primeiroItem) {
          this.csvHeaders.push(row.split(';'));
          primeiroItem = false;
        } else {
          this.csvRecords.push(row.split(';'));
          console.log(this.csvRecords);
        }
      });
      this.carregando = false;
    }, (error: NgxCSVParserError) => {
      this.carregando = false;
      console.log('Error', error);
    });

  }
}
