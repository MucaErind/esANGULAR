import { Component } from '@angular/core';
import { StudentService } from '../servizio-studenti';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina2',
    imports: [
    BrowserModule,
  
    FormsModule // ✅ Aggiungi qui
  ],
  templateUrl: './pagina2.html',
  styleUrls: ['./pagina2.css']
})
export class Pagina2 {
  nome = '';
  classe = '';
  mediaVoti!: number;

  constructor(private studentiService: StudentService) {}

  aggiungi() {
    if (!this.nome || !this.classe || this.mediaVoti == null) {
      alert('Compila tutti i campi!');
      return;
    }

    this.studentiService.aggiungiStudente(this.nome, this.classe, this.mediaVoti);
    alert('Studente aggiunto con successo!');
    this.nome = '';
    this.classe = '';
    this.mediaVoti = 0;
  }
}
