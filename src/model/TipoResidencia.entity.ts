import { Endereco } from './Endereco.entity';
import { Entity, OneToMany, Column } from 'typeorm';
import { EntidadeBase } from 'src/model/EntidadeBase';

@Entity()
export class TipoResidencia extends EntidadeBase {
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
