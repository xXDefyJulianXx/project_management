import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.css'],
  providers: [Title]
})
export class ScopeComponent implements OnInit {

  constructor(private title: Title) { 
    this.title.setTitle('Módulo 2 - Gestión del alcance');
  }

  ngOnInit(): void {
  }

}
