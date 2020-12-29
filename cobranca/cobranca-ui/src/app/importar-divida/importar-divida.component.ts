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
          }
        });
        this.carregando = false;
      }, (error: NgxCSVParserError) => {
        this.carregando = false;
        console.log('Error', error);
      });
 
  }

}
