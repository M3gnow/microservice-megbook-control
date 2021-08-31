import { ManyToOne, Column, Entity, OneToMany } from 'typeorm';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Telefone } from './Telefone.entity';

@Entity()
export class TipoTelefone extends EntidadeBase {
    constructor(tipo: string, telefone: Telefone[], Id?: number) {
        super(Id);
        this.telefone = telefone;
        this.tipo = tipo;
    }

    @Column()
    tipo: string;

    @OneToMany(() => Telefone, (telefone) => telefone.tipoTelefone)
    telefone: Telefone[];
}
