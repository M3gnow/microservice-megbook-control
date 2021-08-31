import { EntidadeBase } from 'src/model/EntidadeBase';
import { Column, Entity } from 'typeorm';

@Entity()
export class Ranking extends EntidadeBase {
    constructor(pontuacao: number, Id?: number) {
        super(Id);
        this.pontuacao = pontuacao;
    }

    @Column()
    pontuacao: number;
}
