import { ValidarEnderecoCobranca } from './../strategy/ValidarEnderecoCobranca';
import { ValidarDadosObrigatoriosEndereco } from './../strategy/ValidarDadosObrigatoriosEndereco';
import { Cliente } from './../model/Cliente.entity';
import { FachadaDictionary } from './FachadaDictionary';
import { IStrategy } from './../strategy/IStrategy';
import { IFachada } from './IFachada';
import { EntidadeBase } from './../model/EntidadeBase';
import { ValidarDadosObrigatorioCartao } from 'src/strategy/ValidarDadosObrigatoriosCartao';
import { ValidarDadosObrigatorioTelefone } from 'src/strategy/ValidarDadosObrigatoriosTelefone';
import { ValidarEnderecoResidencial } from 'src/strategy/ValidarEnderecoResidencial';
import { ValidarEnderecoEntrega } from 'src/strategy/ValidarEnderecoEntrega';
import { ValidarDadosObrigatoriosCliente } from 'src/strategy/ValidarDadosObrigatoriosCliente';
import { ValidarSenhaForte } from 'src/strategy/ValidarSenhaForte';

export class Fachada extends FachadaDictionary implements IFachada {
    constructor() {
        super();
        this.registerDaos();
    }

    async criar(entidadebase: EntidadeBase) {
        const cliente = entidadebase as Cliente;
        const registerStrategysCliente: Array<IStrategy> = [];

        registerStrategysCliente.push(
            new ValidarDadosObrigatorioTelefone(cliente.telefone),
            new ValidarEnderecoResidencial(cliente.endereco),
            new ValidarSenhaForte(cliente.usuario),
            new ValidarDadosObrigatoriosCliente(cliente),
            new ValidarEnderecoEntrega(cliente.endereco),
            new ValidarEnderecoCobranca(cliente.endereco),
        );

        cliente.endereco.map((iteratorEndereco) => {
            registerStrategysCliente.push(
                new ValidarDadosObrigatoriosEndereco(iteratorEndereco),
            );
        });

        cliente.cartao.map((iteratorCartao) => {
            registerStrategysCliente.push(
                new ValidarDadosObrigatorioCartao(iteratorCartao),
            );
        });

        this.registerStrategys('Cliente', registerStrategysCliente);
        this.executarStrategy(entidadebase);

        if (this.messageError.length) {
            return this.messageError;
        }

        await this.executarDAOCreate(entidadebase);
        return [];
    }

    alterar(entidadebase: EntidadeBase) {
        console.log('a');
    }

    deletar(entidadebase: EntidadeBase) {
        console.log('a');
    }

    buscar(entidadebase: EntidadeBase) {
        console.log('a');
    }
}
