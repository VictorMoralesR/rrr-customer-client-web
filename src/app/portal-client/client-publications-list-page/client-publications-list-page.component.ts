import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-publications-list-page',
  templateUrl: './client-publications-list-page.component.html',
  styleUrls: ['./client-publications-list-page.component.scss']
})
export class ClientPublicationsListPageComponent implements OnInit {

  filteredItems = ELEMENT_DATA;
  items = ELEMENT_DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goToPublication(){
    this.router.navigate(['portal/publicacion']);
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
  active: boolean;
  position: number;
  description: string;
  content: string;
}

const ELEMENT_DATA: Publications[] = [
  {position: 1, active:true, title: 'Título de la primera', description: 'Aquí va la descripción de la publicación', content: ''},
  {position: 1, active:false, title: 'Título de la segunda', description: 'Aquí va la descripción de la publicación', content: ''},
  {position: 1, active:false, title: 'Título de la tercera', description: 'Aquí va la descripción de la publicación', content: ''},
  {position: 1, active:false, title: 'Título de la cuarta', description: 'Aquí va la descripción de la publicación', content: ''},
];