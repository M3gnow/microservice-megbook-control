import { Cartao } from 'src/model/Cartao.entity';
import { Cliente } from 'src/model/Cliente.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { getManager } from 'typeorm';
import { IDAO } from './IDAO';

export class ClienteDAO implements IDAO {
    async criar(entidadeBase: EntidadeBase): Promise<any> {
        try {
            await getManager().save(entidadeBase);
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    async buscar(entidadeBase: EntidadeBase): Promise<any> {
        console.log('1');
    }

    async deletar(entidadeBase: EntidadeBase): Promise<any> {
        console.log('1');
    }

    async alterar(entidadeBase: EntidadeBase): Promise<any> {
        console.log('1');
    }
}
