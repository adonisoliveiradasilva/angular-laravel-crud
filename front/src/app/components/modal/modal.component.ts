import { Component, EventEmitter, Output, Input  } from '@angular/core';
import { NomeService } from 'src/app/services/nome.service';
import { INome } from 'src/app/interfaces/INome';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() closeModalEvent = new EventEmitter<boolean>();
  @Output() onSaveEvent = new EventEmitter<boolean>();
  @Input() altura: string = '';
  @Input() nome: string = '';

  nomePessoa!: string;
  idadePessoa!: number;
  @Input() idPessoa!: number;

  constructor(private nomeService: NomeService){

  }

  ngOnInit(){
    if(this.nome == 'Editar' || this.nome == 'Deletar'){
      this.nomeService.getNome(this.idPessoa)
      .then(response => {
        this.nomePessoa = response.nome;
        this.idadePessoa = response.idade;
      })
      .catch(error => console.error(error));
    }


  }

  Function(){
    switch (this.nome) {
      case 'Cadastrar':
        this.Salvar();
        break;
      case 'Editar':
          this.Editar();
          break;
      case 'Deletar':
          this.Deletar();
          break;

      default:
        break;
    }
  }

  Deletar(){
    this.nomeService.deleteNome(this.idPessoa)
      .then(nome => {this.onSaveEvent.emit(true), this.closeModalEvent.emit(true)})
      .catch(error => console.error(error))
  }

  Editar(){
    const nome: INome = {
      id: this.idPessoa,
      nome: this.nomePessoa,
      idade: this.idadePessoa,
    }

    this.nomeService.updateNomes(nome)
      .then(nome => {this.onSaveEvent.emit(true), this.closeModalEvent.emit(true)})
      .catch(error => console.error(error))

  }

  Salvar(){
    const nome: INome = {
      nome: this.nomePessoa,
      idade: this.idadePessoa,
    }

    this.nomeService.setNomes(nome)
      .then(nome => {this.onSaveEvent.emit(true), this.closeModalEvent.emit(true)})
      .catch(error => console.error(error))
  }

  closeModal(){
    this.closeModalEvent.emit(true);
  }


}
