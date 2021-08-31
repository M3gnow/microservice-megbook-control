import { CriarCommand } from './../../command/CriarCommand';
import { Pais } from '../../model/Pais.entity';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';

@Controller('pais')
export class PaisController {
    @Post()
    async criar(@Body() body) {
        // const command = new CriarCommand();
        // // const pais = new Pais(body.nome, body.sigla);

        // // console.log(pais.constructor.name);
        // // process.exit();
        // // const result = await command.execute(pais);

        // if (result.length) {
        //     throw new BadRequestException(result);
        // }

        return 'ok';
    }
}
