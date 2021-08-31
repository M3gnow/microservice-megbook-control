import { Endereco } from 'src/model/Endereco.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { IStrategy } from 'src/strategy/IStrategy';

export class ValidarEnderecoEntrega implements IStrategy {
    protected entidadeBase: Array<EntidadeBase>;

    constructor(entidadeBase: Array<EntidadeBase>) {
        this.entidadeBase = entidadeBase;
    }

    processar(): string {
        // Entrega - todo buscar por tipo
        // const findTipoEnderecoForEntrega = 0;
        // let existEntrega = false;

        // this.entidadeBase.map((entrega) => {
        //     const address: Endereco = entrega as Endereco;

        //     if (!existEntrega) {
        //         if (address.tipoEndereco.Id === findTipoEnderecoForEntrega) {
        //             existEntrega = true;
        //         }
        //     }
        // });

        if (!true) {
            return 'Campo [tipoEndereco] entrega do registro de endereco ausente';
        }

        return null;
    }
}
