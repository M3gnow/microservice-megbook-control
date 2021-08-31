import { Usuario } from './Usuario.entity';
import { Telefone } from './Telefone.entity';
import { Ranking } from './Ranking.entity';
import { Pessoa } from './Pessoa';
import { Endereco } from './Endereco.entity';
import { Cartao } from './Cartao.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Documento } from './Documento';
import { EntidadeBase } from './EntidadeBase';

@Entity()
export class Cliente extends EntidadeBase {
    constructor(
        nome: string,
        genero: string,
        dataNascimento: Date,
        numeroCPF: string,
        ranking: Ranking,
        telefone: Telefone,
        usuario: Usuario,
        endereco: Array<Endereco>,
        cartao?: Cartao[],
        Id?: number,
    ) {
        super(Id);
        this.nome = nome;
        this.genero = genero;
        this.dataNascimento = dataNascimento;
        this.numeroCPF = numeroCPF;
        this.ranking = ranking;
        this.telefone = telefone;
        this.usuario = usuario;
        this.endereco = endereco;
        this.cartao = cartao;
    }

    @Column()
    nome: string;

    @Column()
    genero: string;

    @Column()
    dataNascimento: Date;

    @Column()
    numeroCPF: string;

    @OneToOne((type) => Ranking, {
        cascade: true,
    })
    @JoinColumn()
    ranking: Ranking;

    @OneToOne((type) => Telefone, {
        cascade: true,
    })
    @JoinColumn()
    telefone: Telefone;

    @OneToOne((type) => Usuario, {
        cascade: true,
    })
    @JoinColumn()
    usuario: Usuario;

    @OneToMany((type) => Endereco, (endereco) => endereco.cliente, {
        cascade: true,
    })
    @JoinColumn()
    endereco: Endereco[];

    @OneToMany((type) => Cartao, (cartao) => cartao.cliente, {
        cascade: true,
    })
    @JoinColumn()
    cartao?: Cartao[];
}
