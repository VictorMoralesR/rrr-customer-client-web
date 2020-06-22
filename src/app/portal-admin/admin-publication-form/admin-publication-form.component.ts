import { Component, OnInit } from '@angular/core';

import {ThemePalette} from '@angular/material/core';

import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-publication-form',
  templateUrl: './admin-publication-form.component.html',
  styleUrls: ['./admin-publication-form.component.scss']
})
export class AdminPublicationFormComponent implements OnInit {
  color: ThemePalette = 'primary';
  publicationForm:any;

  constructor(private fb: FormBuilder) { 
    this.publicationForm = this.fb.group({
      idGrupo: ['', Validators.required],
      title: ['', Validators.required],
      subtitle: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
