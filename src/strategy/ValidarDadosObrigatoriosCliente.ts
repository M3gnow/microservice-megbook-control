import { Cliente } from './../model/Cliente.entity';
import { IStrategy } from 'src/strategy/IStrategy';
import { EntidadeBase } from 'src/model/EntidadeBase';

export class ValidarDadosObrigatoriosCliente implements IStrategy {
    protected entidadeBase: EntidadeBase;

    constructor(entidadeBase: EntidadeBase) {
        this.entidadeBase = entidadeBase;
    }

    processar(): string {
        const cliente: Cliente = this.entidadeBase as Cliente;

        if (!cliente.nome) {
            return 'Campo [nome] do registro de cliente ausente';
        }

        if (!cliente.genero) {
            return 'Campo [genero] do registro de cliente ausente';
        }

        if (!cliente.dataNascimento) {
            return 'Campo [dataNascimento] do registro de cliente ausente';
        }

        if (!cliente.numeroCPF) {
            return 'Campo [numeroCPF] do registro de cliente ausente';
        }

        // bloco usuario
        if (!cliente.usuario.email) {
            return 'Campo [email] do registro de cliente ausente';
        }

        // bloco usuario
        if (!cliente.usuario.senha) {
            return 'Campo [senha] do registro de cliente ausente';
        }

        return null;
    }
}
