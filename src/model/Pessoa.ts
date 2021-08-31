import { Column } from 'typeorm';
import { Documento } from './Documento';
import { EntidadeBase } from 'src/model/EntidadeBase';

export class Pessoa extends EntidadeBase {
    documento: Documento;
}
