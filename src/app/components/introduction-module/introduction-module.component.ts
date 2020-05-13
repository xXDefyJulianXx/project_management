import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-introduction-module',
  templateUrl: './introduction-module.component.html',
  styleUrls: ['./introduction-module.component.css'],
  providers: [Title]
})
export class IntroductionModuleComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('Introducción - Módulo 1');
  }

  ngOnInit(): void {
  }

}
