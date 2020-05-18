import {SubItemEvalauacion} from './subItemEvalauacion';

export class ItemEvaluacion {
    id: number;
    pregunta: string
    correcta: boolean;
    respuestas: SubItemEvalauacion[];
}
