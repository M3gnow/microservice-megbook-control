import { EntidadeBase } from './../model/EntidadeBase';
export interface IFachada {
    criar(entidadebase: EntidadeBase);

    buscar(entidadebase: EntidadeBase);

    deletar(entidadebase: EntidadeBase);

    alterar(entidadebase: EntidadeBase);
}
