import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-project-charter',
  templateUrl: './project-charter.component.html',
  styleUrls: ['./project-charter.component.css'],
  providers: [Title]
})
export class ProjectCharterComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('Módulo 1 - Project Charter');
  }

  ngOnInit(): void {
  }

}
