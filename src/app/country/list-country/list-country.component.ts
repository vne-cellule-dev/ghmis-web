import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-country',
  templateUrl: './list-country.component.html',
  styleUrls: ['./list-country.component.css']
})
export class ListCountryComponent implements OnInit {

  /**
   * title do display
   */
  title = 'Liste des pays';

  constructor() { }

  ngOnInit(): void {
  }

}
