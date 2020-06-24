import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-admin-clients-list',
  templateUrl: './admin-clients-list.component.html',
  styleUrls: ['./admin-clients-list.component.scss']
})
export class AdminClientsListComponent implements OnInit {

  displayedColumns = ['position', 'name', 'member', 'seniorityDate'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  member: string;
  seniorityDate: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Juan Pérez', member: 'FREE', seniorityDate: 5},
  {position: 2, name: 'Alejandra López', member: 'MEDIUM', seniorityDate: 5},
  {position: 3, name: 'Rodrigo A.', member: 'JR', seniorityDate: 10},
  {position: 4, name: 'Linda B.', member: 'FREE', seniorityDate: 11},
  {position: 5, name: 'Luis C.', member: 'SR', seniorityDate: 10},
  {position: 6, name: 'Rosa D.', member: 'FREE', seniorityDate: 1},
  {position: 7, name: 'Rolando E.', member: 'FREE', seniorityDate: 8},
  {position: 8, name: 'Mauricio F.', member: 'SR', seniorityDate: 10},
  {position: 9, name: 'Homero G.', member: 'MEDIUM', seniorityDate: 4},
  {position: 10, name: 'Rita H.', member: 'SR', seniorityDate: 4},
];