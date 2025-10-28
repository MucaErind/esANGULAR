import { Injectable } from '@angular/core';

export interface Studente {
  id: number;
  nome: string;
  classe: string;
  mediaVoti: number;
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  //  La tua lista iniziale va qui
  private studenti: Studente[] = [
    { id: 1, nome: 'Mario', classe: '5D', mediaVoti: 4.1 },
    { id: 2, nome: 'Luca', classe: '5D', mediaVoti: 7.3 },
    { id: 3, nome: 'Luigi', classe: '5D', mediaVoti: 3.9 },
    { id: 4, nome: 'Paolo', classe: '5D', mediaVoti: 7.0 },
    { id: 5, nome: 'Andrea', classe: '5D', mediaVoti: 5.7 },
  ];

  private nextId = 6; // 👉 parte dal prossimo ID disponibile

  getStudenti(): Studente[] {
    return this.studenti;
  }

  aggiungiStudente(nome: string, classe: string, mediaVoti: number): void {
    const nuovoStudente: Studente = {
      id: this.nextId++,
      nome,
      classe,
      mediaVoti
    };
    this.studenti.push(nuovoStudente);
  }

  rimuoviStudente(id: number): void {
    this.studenti = this.studenti.filter(s => s.id !== id);
  }
}
