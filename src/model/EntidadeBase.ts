import { PrimaryGeneratedColumn } from 'typeorm';

export class EntidadeBase {
    constructor(Id?: number) {
        this.Id = Id;
    }
    @PrimaryGeneratedColumn()
    Id: number;
}
