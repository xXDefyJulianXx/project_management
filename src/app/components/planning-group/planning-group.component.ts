import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-planning-group',
  templateUrl: './planning-group.component.html',
  styleUrls: ['./planning-group.component.css'],
  providers: [Title]
})
export class PlanningGroupComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('Grupo de planeación - Módulo 2');
  }

  ngOnInit(): void {
  }

}
