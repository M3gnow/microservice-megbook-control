import { Entity, Column, ManyToOne } from 'typeorm';
import { TipoUsuario } from './TipoUsuario.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';

@Entity()
export class Usuario extends EntidadeBase {
    constructor(
        email: string,
        senha: string,
        status: number,
        tipoUsuario: TipoUsuario,
        Id?: number,
    ) {
        super(Id);
        this.email = email;
        this.senha = senha;
        this.status = status;
        this.tipoUsuario = tipoUsuario;
    }

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    status: number;

    @ManyToOne(() => TipoUsuario, (tipoUsuario) => tipoUsuario.Id)
    tipoUsuario: TipoUsuario;
}
