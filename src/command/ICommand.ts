import { EntidadeBase } from './../model/EntidadeBase';
export interface ICommand {
    execute(entidadeBase: EntidadeBase): Promise<any>;
}
