import { EntidadeBase } from 'src/model/EntidadeBase';
import { Usuario } from 'src/model/Usuario.entity';
import { IStrategy } from 'src/strategy/IStrategy';

export class ValidarSenhaForte implements IStrategy {
    protected entidadeBase: EntidadeBase;

    constructor(entidadeBase: EntidadeBase) {
        this.entidadeBase = entidadeBase;
    }

    processar(): string | boolean {
        const usuario: Usuario = this.entidadeBase as Usuario;

        const regexSenhaForte =
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

        if (!regexSenhaForte.test(usuario.senha)) {
            return 'Senha não é forte';
        }

        return null;
    }
}
