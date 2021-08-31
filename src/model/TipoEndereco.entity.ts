import { Column, Entity, OneToMany } from 'typeorm';
import { Endereco } from './Endereco.entity';
import { EntidadeBase } from './EntidadeBase';

@Entity()
export class TipoEndereco extends EntidadeBase {
    constructor(nome: string, endereco: Endereco[], Id?: number) {
        super(Id);
        this.nome = nome;
        this.endereco = endereco;
    }

    @Column()
    nome: string;

    @OneToMany(() => Endereco, (endereco) => endereco.tipoEndereco)
    endereco: Endereco[];
}
