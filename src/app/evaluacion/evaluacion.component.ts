import {Component, OnInit, ViewChild} from '@angular/core';
import {PreguntasService} from '../preguntas/preguntas.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Pregunta} from '../preguntas/model/pregunta';
import {ItemAhorcado} from '../preguntas/model/itemAhorcado';
import {ItemEvaluacion} from './itemEvaluacion';
import {SubItemEvalauacion} from './subItemEvalauacion';
import swal from 'sweetalert2';
import {PdfGenerateComponent} from '../components/pdf-generate/pdf-generate.component';
import {NotificationsComponent} from '../notifications/notifications.component';

@Component({
    selector: 'app-evaluacion',
    templateUrl: './evaluacion.component.html',
    styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit {

    @ViewChild('pdf') pdf: PdfGenerateComponent;
    preguntas: Pregunta[];
    preguntasFilter: Pregunta[];
    items: ItemEvaluacion[] = new Array();

    constructor(private preguntasService: PreguntasService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            const modulo = params.get('evaluacion-modulos');
            if (modulo) {
                this.preguntasService.getPreguntas(modulo).subscribe((preguntas) => {
                    this.preguntas = preguntas;
                    this.preguntas.forEach(pregunta => {
                        this.preguntasFilter = preguntas;
                        const p1: SubItemEvalauacion = this.generarRespuestaIncorrecta(pregunta.id, 0);
                        const p2: SubItemEvalauacion = this.generarRespuestaIncorrecta(pregunta.id, p1.id);
                        this.items.push({
                            id: pregunta.id,
                            pregunta: pregunta.pregunta,
                            correcta: false,
                            respuestas: [{id: pregunta.id, correcta: true, respuesta: pregunta.respuesta},
                                p1,
                                p2].sort(function () {
                                return (Math.random() - 0.5)
                            })
                        });
                    });
                }, error => {
                    console.error('Ha ocurrido un error', error)
                });
            }
        });
    }

    generarRespuestaIncorrecta(id: number, id2: number): SubItemEvalauacion {
        console.log('leng', this.preguntasFilter.length);
        const pregunta = this.preguntasFilter.filter(p => p.id != id && p.id != id2)[Math.floor(Math.random() * 0.5)];
        return {id: pregunta.id, respuesta: pregunta.respuesta, correcta: false};
    }

    selectRespuesta( respuesta:SubItemEvalauacion, item: ItemEvaluacion){
        item.correcta = respuesta.correcta;
    }

    validarEvaluacion( ){
        const preguntasCorrectas= this.items.filter(x => x.correcta == true).length;
        const total= this.items.length;
        const promedio = (preguntasCorrectas * 100) / total;
        console.log('preguntasCorrectas', preguntasCorrectas);
        console.log('total', total);
        console.log('promedio', promedio)
        if(promedio < 60){
            swal('Fallasté', 'Obtuviste un promedio de '.concat(promedio.toString()).concat('sobre 100'), 'error');
        }else{
            this.pdf.generatePdf();
            swal('Bien hecho', 'Obtuviste un promedio de '.concat(promedio.toString()).concat('sobre 100'), 'success');
        }
    }


}








