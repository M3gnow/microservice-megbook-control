import { EntidadeBase } from 'src/model/EntidadeBase';
import { getConnection, getConnectionManager, getManager } from 'typeorm';
import { IDAO } from './IDAO';

export class PaisDAO implements IDAO {
    async criar(entidadeBase: EntidadeBase): Promise<any> {
        await getManager().save(entidadeBase);
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
