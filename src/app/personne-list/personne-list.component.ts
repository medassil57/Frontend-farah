import { Component, OnInit } from '@angular/core';
import { Personne } from '../personne';
import { PersonneService } from '../Services/personne.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personne-list',
  templateUrl: './personne-list.component.html',
  styleUrls: ['./personne-list.component.css']
})
export class PersonneListComponent implements OnInit {
  id?: number
  personnes!: Personne[]

  constructor(private personneService: PersonneService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonnes();
  }
  private getPersonnes() {
    this.personneService.getPeronnesList().subscribe(data => {
      this.personnes = data;
    });
  }

}
