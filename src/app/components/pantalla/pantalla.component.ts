import { Component, OnInit } from '@angular/core';
import { ConsultaApiService } from 'src/app/services/consulta-api.service';

@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit {
  saludo: String;

  constructor(private apiService:ConsultaApiService) {
    this.saludo="Aca va a ir el saludo que responda la API";
   }

  ngOnInit(): void {
  }

  public postConsulta(nombre: String){
      this.apiService.postSaludo({img:nombre}).subscribe({
        next: res => {
          this.setearSaludo(res.saludo)
        },
        error: error => {
      }
      });
    }
    public getConsulta(){
      this.apiService.getSaludo().subscribe({
        next: res => {
          this.setearSaludo(res.saludo)
        },
        error: error => {
          console.log("anda pa alla")
      }
      });
    }

  setearSaludo(res: String) {
    this.saludo=res;
    console.log(res)
  }

}

