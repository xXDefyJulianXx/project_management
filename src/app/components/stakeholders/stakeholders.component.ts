import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-stakeholders',
  templateUrl: './stakeholders.component.html',
  styleUrls: ['./stakeholders.component.css'],
  providers: [Title]
})
export class StakeholdersComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('Módulo 2 - Gestión de los interesados');
  }

  ngOnInit(): void {
  }

}
