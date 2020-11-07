import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage implements OnInit {

  constructor() {}

    cadastrar(){

      alert('Cadastro Realizado com Sucesso!');

    }

  ngOnInit() {
  }

}
