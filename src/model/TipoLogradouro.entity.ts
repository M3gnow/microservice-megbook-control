import { Column, Entity, OneToMany } from 'typeorm';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Endereco } from './Endereco.entity';

@Entity()
export class TipoLogradouro extends EntidadeBase {
    constructor(tipo: string, endereco: Endereco[], Id?: number) {
        super(Id);
        this.tipo = tipo;
        this.endereco = endereco;
    }

    @Column()
    tipo: string;

    @OneToMany(() => Endereco, (endereco) => endereco.tipoEndereco)
    endereco: Endereco[];
}
