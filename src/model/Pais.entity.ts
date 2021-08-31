import { Estado } from './Estado.entity';
import { EntidadeBase } from './EntidadeBase';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Pais extends EntidadeBase {
    constructor(nome: string, sigla: string, estado: Estado, Id?: number) {
        super(Id);
        this.nome = nome;
        this.sigla = sigla;
        this.estado = estado;
    }

    @Column()
    nome: string;
    @Column({ length: 3 })
    sigla: string;

    @ManyToOne(() => Estado, (estado) => estado.pais)
    estado: Estado;
}
