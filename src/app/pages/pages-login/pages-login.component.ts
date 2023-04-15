import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/personne';

@Component({
  selector: 'app-pages-login',
  templateUrl: './pages-login.component.html',
  styleUrls: ['./pages-login.component.css']
})
export class PagesLoginComponent implements OnInit {
  personne: Personne = new Personne();
  [x: string]: any;
  constructor() { }

  ngOnInit(): void {
  }

}
