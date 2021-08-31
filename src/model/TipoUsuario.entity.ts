import { Column, Entity, OneToMany } from 'typeorm';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Usuario } from './Usuario.entity';

@Entity()
export class TipoUsuario extends EntidadeBase {
    constructor(nome: string, usuario: Usuario[], Id?: number) {
        super(Id);
        this.nome = nome;
        this.usuario = usuario;
    }

    @Column()
    nome: string;

    @OneToMany(() => Usuario, (usuario) => usuario.tipoUsuario)
    usuario: Usuario[];
}
