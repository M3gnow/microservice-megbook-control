import { ICommand } from './ICommand';
import { Command } from './Command';
import { EntidadeBase } from './../model/EntidadeBase';

export class CriarCommand extends Command implements ICommand {
    async execute(entidadeBase: EntidadeBase) {
        return await this.fachada.criar(entidadeBase);
    }
}
