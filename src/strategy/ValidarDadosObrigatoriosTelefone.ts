import { EntidadeBase } from 'src/model/EntidadeBase';
import { Telefone } from 'src/model/Telefone.entity';
import { IStrategy } from './IStrategy';

export class ValidarDadosObrigatorioTelefone implements IStrategy {
    protected entidadeBase: EntidadeBase;

    constructor(entidadeBase: EntidadeBase) {
        this.entidadeBase = entidadeBase;
    }
    processar(): string {
        const telefone: Telefone = this.entidadeBase as Telefone;

        if (!telefone.numero) {
            return 'Campo [numero] do registro de telefone ausente';
        }

        if (!telefone.ddd) {
            return 'Campo [ddd] do registro de telefone ausente';
        }

        if (!telefone.tipoTelefone.Id) {
            return 'Campo [tipoTelefone] do registro de telefone ausente';
        }

        return null;
    }
}
