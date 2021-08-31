import { Pais } from '../model/Pais.entity';
import { EntidadeBase } from './../model/EntidadeBase';
import { IStrategy } from './IStrategy';

export class ValidarDadosObrigatoriosPais implements IStrategy {
    processar(entidadeBase: EntidadeBase): string | boolean {
        const pais = entidadeBase as Pais;
        if (!pais.nome) {
            return 'Campo [nome] do registro de pais ausente';
        }

        if (!pais.sigla) {
            return 'Campo [sigla] do registro de pais ausente';
        }

        return false;
    }
}
