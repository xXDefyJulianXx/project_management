import {Component, OnInit, ViewChild} from '@angular/core';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {Pregunta} from '../model/pregunta';
import {PreguntasService} from '../preguntas.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemAhorcado} from '../model/itemAhorcado';
import swal from 'sweetalert2';

@Component({
    selector: 'app-ahorcado',
    templateUrl: './ahorcado.component.html',
    styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

    @ViewChild('notifications') notifications: NotificationsComponent
    preguntas: Pregunta[];

    items: ItemAhorcado[] = new Array();

    constructor(private preguntasService: PreguntasService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }


    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            const modulo = params.get('modulodos');
            if (modulo) {
                this.preguntasService.getPreguntas(modulo).subscribe((preguntas) => {
                    this.preguntas = preguntas
                    this.preguntas.forEach(pregunta => {
                        let secreto = '';
                        for (let i = 0; i < pregunta.respuesta.length; i++) {
                            secreto = secreto.concat('_');
                        }
                        this.items.push({
                            id: pregunta.id,
                            pregunta: pregunta.pregunta,
                            respuesta: pregunta.respuesta,
                            correcto: false, intento: 0,
                            palabra: secreto,
                            secreto: new Array(pregunta.respuesta.length)
                        });
                    });
                }, error => {
                    console.error('Ha ocurrido un error', error)
                    this.notifications.showNotification('notification_important', 'Ha ocurrido un error intentalo más tarde', 'bottom', 'right', 4)
                });
            }
        });
    }

    validarLetra(value: string, pos: number, item: ItemAhorcado) {
        if (item.respuesta.charAt(pos).toLowerCase() !== value.toLowerCase()) {
            item.intento++;
            if (item.intento >= 5) {
                this.router.navigate(['/dashboard']);
                swal('Fallasté', 'Por favor lee los contenidos de nuevo', 'error');
            }
        } else {
            item.palabra = this.replaceAt(pos, value.toLowerCase(), item.palabra);
            console.log(item.palabra);
        }
    }

    replaceAt(index, replacement, palabra: string) {
        return palabra.substr(0, index) + replacement + palabra.substr(index + replacement.length);
    }
}
