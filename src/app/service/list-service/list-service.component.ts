import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.css']
})
export class ListServiceComponent implements OnInit {
  
  /**
   * title to display
   */
  title = 'Liste des services';
  constructor() { }

  ngOnInit(): void {
  }

}
