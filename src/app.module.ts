import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PaisController } from './controller/pais/pais.controller';
import { ClienteController } from './controller/cliente/cliente.controller';
import { Bairro } from './model/Bairro.entity';
import { Bandeira } from './model/Bandeira.entitty';
import { Cartao } from './model/Cartao.entity';
import { Cidade } from './model/Cidade.entity';
import { Cliente } from './model/Cliente.entity';
import { Endereco } from './model/Endereco.entity';
import { Estado } from './model/Estado.entity';
import { Pais } from './model/Pais.entity';
import { Ranking } from './model/Ranking.entity';
import { Telefone } from './model/Telefone.entity';
import { TipoTelefone } from './model/TipoTelefone.entity';
import { TipoEndereco } from './model/TipoEndereco.entity';
import { TipoLogradouro } from './model/TipoLogradouro.entity';
import { TipoResidencia } from './model/TipoResidencia.entity';
import { TipoUsuario } from './model/TipoUsuario.entity';
import { Usuario } from './model/Usuario.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: '127.0.0.1',
            port: 3306,
            username: 'root',
            password: 'thiago46415117',
            database: 'megbook',
            entities: [
                Bairro,
                Bandeira,
                Cartao,
                Cidade,
                Cliente,
                Endereco,
                Estado,
                Pais,
                Ranking,
                Telefone,
                TipoEndereco,
                TipoLogradouro,
                TipoResidencia,
                TipoTelefone,
                TipoUsuario,
                Usuario,
            ],
        }),
    ],
    controllers: [AppController, PaisController, ClienteController],
    providers: [AppService],
})
export class AppModule {}
