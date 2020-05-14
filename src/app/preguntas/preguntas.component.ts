import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PreguntasService} from './preguntas.service';
import {Pregunta} from './model/pregunta';
import {Item} from './model/item';
import {newArray} from '@angular/compiler/src/util';
import {async} from 'rxjs/internal/scheduler/async';
import {delay} from 'rxjs/operators';
import {timer} from 'rxjs';

@Component({
    selector: 'app-preguntas',
    templateUrl: './preguntas.component.html',
    styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

    preguntas: Pregunta[];
    item1: Item;
    item2: Item;

    items: Item[] = new Array();

    constructor(private preguntasService: PreguntasService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            console.log(params.get('modulo'));
            const modulo = params.get('modulo');
            if (modulo) {
                this.preguntasService.getPreguntas(modulo).subscribe((preguntas) => {
                    this.preguntas = preguntas
                    this.preguntas.forEach(pregunta => {
                        this.items.push({id: pregunta.id, elemento: pregunta.pregunta, mostrar: false, correcto: false});
                        this.items.push({id: pregunta.id, elemento: pregunta.respuesta, mostrar: false, correcto: false});
                    });
                });
            }
        });
    }

    public selectItem(event: any, item: Item) {
        if(this.item1 != null && this.item2 != null) return;
        if (item.mostrar || item.correcto) {
            console.log('retrono')
            return;
        } else {
            item.mostrar = true;
        }
        if (this.item1 == null) {
            this.item1 = item;
        } else {
            console.log('entro a validar la pareja ')
            this.item2 = item;
            if (this.item1.id == this.item2.id) {
                console.log('la pareja es la misma')
                this.item1.correcto = true;
                this.item2.correcto = true;
                this.items.filter(x => x.id == this.item1.id).forEach(x => {
                    x.correcto = true
                });
                this.item1 = null;
                this.item2 = null;
            } else {
                timer(1000).subscribe(x => { console.log('la pareja no es la misma')
                    this.items.filter(x => x.id == this.item1.id).forEach(x => {
                        x.correcto = false;
                        x.mostrar = false
                    });
                    this.items.filter(x => x.id == this.item2.id).forEach(x => {
                        x.correcto = false;
                        x.mostrar = false
                        this.item1 = null;
                        this.item2 = null;
                        this.item1 = null;
                        this.item2 = null;
                    })});
            }

        }
    }

}
