import { Endereco } from 'src/model/Endereco.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { IStrategy } from 'src/strategy/IStrategy';

export class ValidarEnderecoResidencial implements IStrategy {
    protected entidadeBase: Array<EntidadeBase>;

    constructor(entidadeBase: Array<EntidadeBase>) {
        this.entidadeBase = entidadeBase;
    }

    processar(): string {
        // Residencial - todo buscar por tipo
        // const findTipoEnderecoForResidencial = 0;
        // let existResidencial = false;

        // this.entidadeBase.map((residencial) => {
        //     const address: Endereco = residencial as Endereco;

        //     if (!existResidencial) {
        //         if (
        //             address.tipoEndereco.Id === findTipoEnderecoForResidencial
        //         ) {
        //             existResidencial = true;
        //         }
        //     }
        // });

        if (!true) {
            return 'Campo [tipoEndereco] residencial do registro de endereco ausente';
        }

        return null;
    }
}
