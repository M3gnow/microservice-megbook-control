import { EntidadeBase } from 'src/model/EntidadeBase';
export interface IDAO {
    criar(entidadeBase: EntidadeBase): Promise<any>;

    buscar(entidadeBase: EntidadeBase): Promise<any>;

    deletar(entidadeBase: EntidadeBase): Promise<any>;

    alterar(entidadeBase: EntidadeBase): Promise<any>;
}
