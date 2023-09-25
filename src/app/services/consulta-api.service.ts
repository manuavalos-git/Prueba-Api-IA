import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {

  private endpoint : string ='/imagen';
  private api : string ='https://api-resultados.onrender.com/Pruebas';

  constructor(private http: HttpClient) { }

  public getSaludo():Observable<any>{
    let url=this.api;
    console.log(url)
    return this.http.get<any>(url);
  }

  public postSaludo(imgData: { img: String }):Observable<any>{
    let url=environment.api+this.endpoint;
    return this.http.post<any>(url,imgData);
  }
}
