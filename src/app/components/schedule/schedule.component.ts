import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  providers: [Title]

})
export class ScheduleComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('Módulo 2 - Gestión del cronograma');
  }

  ngOnInit(): void {
  }

}
