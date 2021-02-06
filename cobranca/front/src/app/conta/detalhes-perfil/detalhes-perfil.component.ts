import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AutenticacaoService } from '../../core/services/auth.service';

@Component({
  selector: 'app-detalhes-perfil',
  templateUrl: './detalhes-perfil.component.html',
  styleUrls: ['./detalhes-perfil.component.css']
})
export class DetalhesPerfilComponent implements OnInit {

  nomeCompleto: string;
  email: string;
  alias: string;
  imageSrc: string;


  constructor(private authService: AutenticacaoService) { }

  ngOnInit() {
    this.nomeCompleto = this.authService.getUsuarioLogado().fullName;
    this.email = this.authService.getUsuarioLogado().email;
    this.imageSrc = this.authService.getUsuarioLogado().foto;
  }

  upload(event){
    console.log(event)
  }


  onFileChange(event) {
    if(event.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.imageSrc = event.target.result;
        this.authService.getUsuarioLogado().foto = this.imageSrc;
      };
    }

  }

}
