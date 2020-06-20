import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-publications-list',
  templateUrl: './admin-publications-list.component.html',
  styleUrls: ['./admin-publications-list.component.scss']
})
export class AdminPublicationsListComponent implements OnInit {
  filteredItems = ELEMENT_DATA;
  items = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  assignCopy(){
    this.filteredItems = Object.assign([], this.items);
  }

  applyFilter(value){
    const filterValue = (event.target as HTMLInputElement).value;
      if(!filterValue){
          this.assignCopy();
      } // when nothing has typed
      this.filteredItems = Object.assign([], this.items).filter(
        item => item.title.toLowerCase().indexOf(filterValue.toLowerCase()) > -1
      )
  }

}


export interface Publications {
  title: string;
  position: number;
  description: string;
  content: string;
}

const ELEMENT_DATA: Publications[] = [
  {position: 1, title: 'Título de la primera', description: 'Aquí va la descripción de la publicación', content: ''},
  {position: 1, title: 'Título de la segunda', description: 'Aquí va la descripción de la publicación', content: ''},
  {position: 1, title: 'Título de la tercera', description: 'Aquí va la descripción de la publicación', content: ''},
  {position: 1, title: 'Título de la cuarta', description: 'Aquí va la descripción de la publicación', content: ''},
];