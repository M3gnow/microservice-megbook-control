import { Cartao } from 'src/model/Cartao.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { IStrategy } from './IStrategy';

export class ValidarDadosObrigatorioCartao implements IStrategy {
    protected entidadeBase: EntidadeBase;

    constructor(entidadeBase: EntidadeBase) {
        this.entidadeBase = entidadeBase;
    }
    processar(): string {
        const cartao: Cartao = this.entidadeBase as Cartao;

        if (!cartao.numero) {
            return 'Campo [numero] do registro de cartao ausente';
        }

        if (!cartao.nomeImpresso) {
            return 'Campo [nomeImpresso] do registro de cartao ausente';
        }

        if (!cartao.bandeira.Id) {
            return 'Campo [bandeira] do registro de cartao ausente';
        }

        if (!cartao.codigoSeguranca) {
            return 'Campo [codigoSeguranca] do registro de cartao ausente';
        }
        return null;
    }
}
