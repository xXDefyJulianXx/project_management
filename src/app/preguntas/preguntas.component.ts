import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PreguntasService} from './preguntas.service';
import {Pregunta} from './model/pregunta';
import {Item} from './model/item';
import {newArray} from '@angular/compiler/src/util';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  preguntas: Pregunta[];
  items: Item[] = new Array();

  constructor(private preguntasService: PreguntasService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      console.log(params.get('modulo'));
      const modulo = params.get('modulo');
      if (modulo) {
        this.preguntasService.getPreguntas(modulo).subscribe((preguntas) => {
          this.preguntas = preguntas
         this.preguntas.forEach(pregunta => {
            this.items.push({id: pregunta.id, elemento: pregunta.pregunta, mostrar: false});
            this.items.push({id: pregunta.id, elemento: pregunta.respuesta, mostrar: false});
          });
        });
      }
    });
  }




}
