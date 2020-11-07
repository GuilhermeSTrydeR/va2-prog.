import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor() { }


  boas_vindas(){

    alert('esse aplicativo foi desenvolvido utilizando o tema escuro do google chrome, caso haja bugs entre outros problemas de lead-out por favor troque para o tema escuro, atenciosamente; Guilherme Silva - mesa preta open source \n\nobservações: tive que desabilitar o import "{ format } from "path";" do arquivo "CadastroPage.page.ts" pois depois de varios testes e diversas tentativas de emular o aplicativo com o comando "ionic serve --lab" era retornado o erro "cannot get /" e ficava numa tela preta')

  }

  ngOnInit() {

    this.boas_vindas();

  }

}
