import { OneToMany, ManyToOne, Entity, Column } from 'typeorm';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { Bairro } from './Bairro.entity';
import { TipoEndereco } from './TipoEndereco.entity';
import { TipoResidencia } from './TipoResidencia.entity';
import { TipoLogradouro } from './TipoLogradouro.entity';
import { Cliente } from './Cliente.entity';

@Entity()
export class Endereco extends EntidadeBase {
    constructor(
        logradouro: string,
        numero: number,
        cep: string,
        observacoes: string,
        identificador: string,
        tipoEndereco: TipoEndereco,
        tipoResidencia: TipoResidencia,
        tipoLogradouro: TipoLogradouro,
        bairro: Bairro,
        cliente?: Cliente,
        Id?: number,
    ) {
        super(Id);
        this.logradouro = logradouro;
        this.numero = numero;
        this.cep = cep;
        this.observacoes = observacoes;
        this.identificador = identificador;
        this.cliente = cliente;
        this.tipoEndereco = tipoEndereco;
        this.tipoResidencia = tipoResidencia;
        this.tipoLogradouro = tipoLogradouro;
        this.bairro = bairro;
    }

    @Column()
    logradouro: string;

    @Column()
    numero: number;

    @Column()
    cep: string;

    @Column()
    observacoes: string;

    @Column()
    identificador?: string;

    @ManyToOne((type) => Cliente, (cliente) => cliente.endereco)
    cliente: Cliente;

    @ManyToOne((type) => TipoEndereco, (tipoEndereco) => tipoEndereco.endereco)
    tipoEndereco: TipoEndereco;

    @ManyToOne(
        (type) => TipoResidencia,
        (tipoResidencia) => tipoResidencia.endereco,
    )
    tipoResidencia: TipoResidencia;

    @ManyToOne(
        (type) => TipoLogradouro,
        (tipoLogradouro) => tipoLogradouro.endereco,
    )
    tipoLogradouro: TipoLogradouro;

    @ManyToOne((type) => Bairro, (bairro) => bairro.endereco)
    bairro: Bairro;
}
