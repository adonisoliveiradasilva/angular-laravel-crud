import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_PATH } from 'src/environments/environment';
import { INome } from '../interfaces/INome';


@Injectable({
  providedIn: 'root'
})
export class NomeService {

  constructor(private httpClient: HttpClient) {

  }

  // getNomes(){
  //   return this.httpClient.get<INome[]>(`${API_PATH}nomes`).toPromise()
  // }

  getNomes() {
    return this.httpClient.get(`${API_PATH}nomes`).toPromise();
  }

  // getNome(id: number) {
  //   return this.httpClient.get(`${API_PATH}nome/${id}`).toPromise();
  // }

  getNome(id: number): Promise<INome> {
    return this.httpClient.get(`${API_PATH}nome/${id}`)
      .toPromise()
      .then((response: any) => {
        const nome: INome = {
          id: response.data.id,
          nome: response.data.nome,
          idade: response.data.idade
        };
        return nome;
      });
  }

  deleteNome(id: number){
    return this.httpClient.delete(`${API_PATH}nome/${id}`).toPromise();
  }

  setNomes(nome: INome){
    return this.httpClient.post(`${API_PATH}nome`, nome).toPromise();
  }

  updateNomes(nome: INome){
    return this.httpClient.put(`${API_PATH}nome/${nome.id}`, nome).toPromise();
  }
}
