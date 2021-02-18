import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {catchError, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DividasService {

  uri: string;

  constructor(private http: HttpClient) {
    this.uri = `${environment.BASE_URL}/dividas`;
  }

  importarDados(file: any){
    const formData = new FormData();
    formData.append('file', file[0], file.name)
    return this.http.post(`${this.uri}/importar-dados`, formData);
  }

  buscarDividas(): Observable<any> {
    return this.http.get(this.uri);
  }
}
