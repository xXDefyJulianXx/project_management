import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-costs',
  templateUrl: './costs.component.html',
  styleUrls: ['./costs.component.css'],
  providers: [Title]
})
export class CostsComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Módulo 2 - Gestión de los costos');
  }

  ngOnInit(): void {
  }

}
