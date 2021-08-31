import { OneToMany, ManyToOne, Entity, Column } from 'typeorm';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Pais } from './Pais.entity';
import { Cidade } from './Cidade.entity';

@Entity()
export class Estado extends EntidadeBase {
    constructor(
        nome: string,
        uf: string,
        pais: Pais[],
        cidade: Cidade,
        Id?: number,
    ) {
        super(Id);
        this.nome = nome;
        this.uf = uf;
        this.pais = pais;
        this.cidade = cidade;
    }

    @Column()
    nome: string;

    @Column()
    uf: string;

    @ManyToOne(() => Cidade, (cidade) => cidade.estado)
    cidade: Cidade;

    @OneToMany(() => Pais, (pais) => pais.Id)
    pais: Pais[];
}
