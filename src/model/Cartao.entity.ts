import { Column, Entity, ManyToOne } from 'typeorm';
import { Bandeira } from './Bandeira.entitty';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Cliente } from './Cliente.entity';

@Entity()
export class Cartao extends EntidadeBase {
    constructor(
        numero: string,
        nomeImpresso: string,
        codigoSeguranca: number,
        isPreferencial: boolean,
        bandeira: Bandeira,
        cliente?: Cliente,
        Id?: number,
    ) {
        super(Id);
        this.numero = numero;
        this.nomeImpresso = nomeImpresso;
        this.codigoSeguranca = codigoSeguranca;
        this.isPreferencial = isPreferencial;
        this.bandeira = bandeira;
        this.cliente = cliente;
    }

    @Column()
    numero: string;

    @Column()
    nomeImpresso: string;

    @Column()
    codigoSeguranca: number;

    @ManyToOne(() => Bandeira, (bandeira) => bandeira.cartao)
    bandeira: Bandeira;

    @ManyToOne(() => Cliente, (cliente) => cliente.cartao)
    cliente: Cliente;

    @Column()
    isPreferencial: boolean;
}
