import { Component, OnInit } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-importar-divida',
  templateUrl: './importar-divida.component.html',
  styleUrls: ['./importar-divida.component.css']
})
export class ImportarDividaComponent implements OnInit {

  constructor(private ngxCsvParser: NgxCsvParser) { }

  ngOnInit(): void {
  }

  csvRecords: any[] = [];
  csvHeaders: any[] = [];
  carregando: boolean = false;

  header = false;

  lerArquivo(event: any) {
    console.log(event);
    this.carregando = true;
    const files = event.srcElement.files;
  }

}
