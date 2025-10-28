import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { VisualizzaStudente } from '../visualizza-studente/visualizza-studente';
import { StudentService } from '../servizio-studenti';
@Component({
selector: 'app-pagina3',
imports: [CommonModule,VisualizzaStudente],
templateUrl: './pagina3.html',
styleUrl: './pagina3.css',
})
export class Pagina3 {
studenti: any[] = [];
constructor(private studentiService: StudentService) {}
ngOnInit() {
this.studenti = this.studentiService.getStudenti();
}
}