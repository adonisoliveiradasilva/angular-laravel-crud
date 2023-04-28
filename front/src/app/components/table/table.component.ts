import { Component } from '@angular/core';
import { NomeService } from 'src/app/services/nome.service';
import { INome } from '../../interfaces/INome';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private nomeService: NomeService){

  }


  ngOnInit() {
    this.obterTodosNomes();
  }

  visibleModal = false;


  colunas = ['nome', 'idade', 'acoes'];
  dataSource: INome[] = [];

  altura = '';
  nome = '';
  idPessoa: number = 0;

  setModal(altura: string, nome: string, id: number ) {
    this.altura = altura;
    this.nome = nome;
    this.idPessoa = id;
  }


  obterTodosNomes(){
    this.nomeService.getNomes()
      .then((response: any) => {
        const nomes = response && response.data ? response.data : [];
        this.dataSource = nomes;
      })
      .catch(error => console.error(error))
    }


}
