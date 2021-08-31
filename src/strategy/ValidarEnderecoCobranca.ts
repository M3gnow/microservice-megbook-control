import { Endereco } from 'src/model/Endereco.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { IStrategy } from 'src/strategy/IStrategy';

export class ValidarEnderecoCobranca implements IStrategy {
    protected entidadeBase: Array<EntidadeBase>;

    constructor(entidadeBase: Array<EntidadeBase>) {
        this.entidadeBase = entidadeBase;
    }

    processar(): string {
        // Cobranca - todo buscar por tipo
        // const findTipoEnderecoForCobranca = 0;
        // let existCobranca = false;

        // this.entidadeBase.map((cobranca) => {
        //     const address: Endereco = cobranca as Endereco;

        //     if (!existCobranca) {
        //         if (address.tipoEndereco.Id === findTipoEnderecoForCobranca) {
        //             existCobranca = true;
        //         }
        //     }
        // });

        if (!true) {
            return 'Campo [tipoEndereco] cobranca do registro de endereco ausente';
        }

        return null;
    }
}
