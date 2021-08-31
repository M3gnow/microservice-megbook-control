import { Column, Entity, ManyToOne } from 'typeorm';
import { TipoTelefone } from './TipoTelefone.entity';
import { EntidadeBase } from 'src/model/EntidadeBase';

@Entity()
export class Telefone extends EntidadeBase {
    constructor(
        ddd: number,
        numero: string,
        tipoTelefone: TipoTelefone,
        Id?: number,
    ) {
        super(Id);
        this.ddd = ddd;
        this.numero = numero;
        this.tipoTelefone = tipoTelefone;
    }

    @Column()
    ddd: number;

    @Column()
    numero: string;

    @ManyToOne(() => TipoTelefone, (tipoTelefone) => tipoTelefone.Id)
    tipoTelefone: TipoTelefone;
}
