import { Entity, OneToMany, Column } from 'typeorm';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Cartao } from './Cartao.entity';

@Entity()
export class Bandeira extends EntidadeBase {
    constructor(nome: string, cartao: Cartao, Id?: number) {
        super(Id);
        this.nome = nome;
        this.cartao = cartao;
    }
    @Column()
    nome: string;

    @OneToMany(() => Cartao, (cartao) => cartao.bandeira)
    cartao: Cartao;
}
