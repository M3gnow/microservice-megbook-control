import { Endereco } from 'src/model/Endereco.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { IStrategy } from './IStrategy';

export class ValidarDadosObrigatoriosEndereco implements IStrategy {
    protected entidadeBase: EntidadeBase;

    constructor(entidadeBase: EntidadeBase) {
        this.entidadeBase = entidadeBase;
    }

    processar(): string {
        const endereco: Endereco = this.entidadeBase as Endereco;

        if (!endereco.tipoEndereco.Id) {
            return 'Campo [tipoEndereco] do registro de endereco ausente';
        }

        if (!endereco.tipoResidencia.Id) {
            return 'Campo [tipoResidencia] do registro de endereco ausente';
        }

        if (!endereco.tipoLogradouro.Id) {
            return 'Campo [tipoLogradouro] do registro de endereco ausente';
        }

        if (!endereco.logradouro) {
            return 'Campo [logradouro] do registro de endereco ausente';
        }

        if (!endereco.numero) {
            return 'Campo [numero] do registro de endereco ausente';
        }

        if (!endereco.bairro.Id) {
            return 'Campo [bairro] do registro de endereco ausente';
        }

        if (!endereco.cep) {
            return 'Campo [cep] do registro de endereco ausente';
        }

        endereco.bairro.cidade.map((addressCity) => {
            if (!addressCity.Id) {
                return 'Campo [cidade] do registro de endereco ausente';
            }

            addressCity.estado.map((addressState) => {
                if (addressState.Id) {
                    return 'Campo [estado] do registro de endereco ausente';
                }

                addressState.pais.map((addressCountry) => {
                    return 'Campo [pais] do registro de endereco ausente';
                });
            });
        });

        return null;
    }
}
