import { CriarCommand } from './../../command/CriarCommand';
import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { Cliente } from 'src/model/Cliente.entity';
import { Endereco } from 'src/model/Endereco.entity';
import { Bairro } from 'src/model/Bairro.entity';
import { Cidade } from 'src/model/Cidade.entity';
import { Estado } from 'src/model/Estado.entity';
import { Pais } from 'src/model/Pais.entity';
import { TipoLogradouro } from 'src/model/TipoLogradouro.entity';
import { TipoResidencia } from 'src/model/TipoResidencia.entity';
import { TipoEndereco } from 'src/model/TipoEndereco.entity';
import { Cartao } from 'src/model/Cartao.entity';
import { Usuario } from 'src/model/Usuario.entity';
import { Ranking } from 'src/model/Ranking.entity';
import { TipoTelefone } from 'src/model/TipoTelefone.entity';
import { Telefone } from 'src/model/Telefone.entity';
import { Bandeira } from 'src/model/Bandeira.entitty';
import { TipoUsuario } from 'src/model/TipoUsuario.entity';
import { Documento } from 'src/model/Documento';

@Controller('cliente')
export class ClienteController {
    @Post()
    async criar(@Body() body) {
        const endereco: Array<Endereco> = [];
        const cartao: Array<Cartao> = [];
        const cidade: Array<Cidade> = [];
        const estado: Array<Estado> = [];
        const pais: Array<Pais> = [];

        body.endereco.map((address) => {
            pais.push(new Pais(null, null, null, address.pais));
            estado.push(new Estado(null, null, pais, null, address.estado));
            cidade.push(new Cidade(null, estado, null, address.cidade));

            endereco.push(
                new Endereco(
                    address.logradouro,
                    address.numero,
                    address.cep,
                    address.observacoes ? address.observacoes : '',
                    address.identificador,
                    new TipoEndereco(null, null, address.tipoEndereco),
                    new TipoResidencia(null, null, address.tipoResidencia),
                    new TipoLogradouro(null, null, address.tipoLogradouro),
                    new Bairro(null, cidade, null, address.bairro),
                ),
            );
        });

        if (body.cartao) {
            cartao.push(
                new Cartao(
                    body.cartao.numero,
                    body.cartao.nomeImpresso,
                    body.cartao.codigoSeguranca,
                    body.cartao.isPreferencial,
                    new Bandeira(null, null, body.cartao.bandeira),
                ),
            );
        } else {
            cartao.push(new Cartao(null, null, null, null, null));
        }

        const cliente = new Cliente(
            body.nome,
            body.genero,
            body.dataNascimento,
            body.numeroCPF,
            new Ranking(body.ranking.pontuacao),
            new Telefone(
                body.telefone.ddd,
                body.telefone.numero,
                new TipoTelefone(null, null, body.telefone.tipoTelefone),
            ),
            new Usuario(
                body.usuario.email,
                body.usuario.senha,
                body.usuario.status,
                new TipoUsuario(null, null, body.usuario.tipoUsuario),
            ),
            endereco,
            cartao,
        );

        const command = new CriarCommand();
        const result = await command.execute(cliente);

        if (result.length) {
            throw new BadRequestException(result);
        }

        return 'ok';
    }
}
