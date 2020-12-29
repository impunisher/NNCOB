import { Divida } from './../core/model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImportarDividaService {

  uri: string;

  constructor(private http: HttpClient) { 
    this.uri = `${environment.apiUrl}/importar-dados`;
  }

  adicionar(divida: Divida): Promise<Divida> {
    return this.http.post<Divida>(this.uri, divida)
      .toPromise();
  }
}
