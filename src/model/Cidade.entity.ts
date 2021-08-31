import { OneToMany, ManyToOne, Entity, Column } from 'typeorm';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Estado } from './Estado.entity';
import { Bairro } from './Bairro.entity';

@Entity()
export class Cidade extends EntidadeBase {
    constructor(nome: string, estado: Estado[], bairro: Bairro, Id?: number) {
        super(Id);
        this.nome = nome;
        this.estado = estado;
        this.bairro = bairro;
    }

    @Column()
    nome: string;

    @ManyToOne(() => Bairro, (bairro) => bairro.cidade)
    bairro: Bairro;

    @OneToMany((type) => Estado, (estado) => estado.Id)
    estado: Estado[];
}
