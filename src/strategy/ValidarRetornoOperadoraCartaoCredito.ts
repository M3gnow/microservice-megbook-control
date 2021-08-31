import { Cartao } from 'src/model/Cartao.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { IStrategy } from 'src/strategy/IStrategy';

export class ValidarRetornoOperadoraCartaoCredito implements IStrategy {
    protected entidadeBase: EntidadeBase;

    constructor(entidadeBase: EntidadeBase) {
        this.entidadeBase = entidadeBase;
    }

    processar(): string | boolean {
        const cartao: Cartao = this.entidadeBase as Cartao;

        return false;
    }
}
