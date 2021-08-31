import { EntidadeBase } from 'src/model/EntidadeBase';

export interface IStrategy {
    processar(entidadeBase: EntidadeBase);
}
