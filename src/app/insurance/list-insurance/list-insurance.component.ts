import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-insurance',
  templateUrl: './list-insurance.component.html',
  styleUrls: ['./list-insurance.component.css']
})
export class ListInsuranceComponent implements OnInit {

  /**
   * title to display
   */
  title='Liste des assurances'; 

  constructor() { }

  ngOnInit(): void {
  }

}
