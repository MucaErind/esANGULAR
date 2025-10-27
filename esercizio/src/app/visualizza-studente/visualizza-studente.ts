import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizza-studente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualizza-studente.html',
  styleUrl: './visualizza-studente.css'
})
export class VisualizzaStudente {
  @Input() nome!: any;  // <-- Dato ricevuto dal padre
  @Input() classe!: any; 
  @Input() mediaVoti!: any; 
  mostra = false;

  mostraMedia() {
    this.mostra = !this.mostra;
  }
}