import { Cidade } from './Cidade.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Column, Entity, OneToMany } from 'typeorm';
import { Endereco } from './Endereco.entity';

@Entity()
export class Bairro extends EntidadeBase {
    constructor(
        nome: string,
        cidade: Cidade[],
        endereco: Endereco[],
        Id?: number,
    ) {
        super(Id);
        this.nome = nome;
        this.cidade = cidade;
        this.endereco = endereco;
    }

    @Column()
    nome: string;

    @OneToMany(() => Cidade, (cidade) => cidade.Id)
    cidade: Cidade[];

    @OneToMany(() => Endereco, (endereco) => endereco.tipoEndereco)
    endereco: Endereco[];
}
