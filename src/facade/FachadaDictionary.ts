import { IDAO } from './../DAL/IDAO';
import { PaisDAO } from '../DAL/PaisDAO';
import { IStrategy } from 'src/strategy/IStrategy';
import { EntidadeBase } from 'src/model/EntidadeBase';
import { ValidarDadosObrigatoriosPais } from './../strategy/ValidarDadosObrigatoriosPais';
import { ClienteDAO } from 'src/DAL/ClienteIDAO';

export class FachadaDictionary {
    protected regrasNegocio: Array<DictionaryStrategy> = [];
    protected daos: Array<DictionaryDAO> = [];
    protected messageError: Array<string> = [];

    registerStrategys(nameClass: string, strategys: Array<IStrategy>) {
        // const listaStrategyPais: Array<IStrategy> = [];
        // listaStrategyPais.push(new ValidarDadosObrigatoriosPais());

        // this.regrasNegocio.push({
        //     nameClass: 'Pais',
        //     strategys: listaStrategyPais,
        // });

        switch (nameClass) {
            case 'Cliente':
                this.regrasNegocio.push({
                    nameClass,
                    strategys,
                });

                break;

            default:
                break;
        }
    }

    registerDaos() {
        this.daos.push({
            nameClass: 'Pais',
            dao: new PaisDAO(),
        });

        this.daos.push({
            nameClass: 'Cliente',
            dao: new ClienteDAO(),
        });
    }

    executarStrategy(entidadeBase: EntidadeBase) {
        const nameClass = entidadeBase.constructor.name;

        const getStrategysForExecute = this.regrasNegocio.filter((rn) => {
            if (rn.nameClass === nameClass) {
                return rn.strategys;
            }
        });

        for (const strategyForExecute of getStrategysForExecute) {
            for (const strategy of strategyForExecute.strategys) {
                const resultStretegy = strategy.processar(entidadeBase);
                if (resultStretegy) {
                    this.messageError.push(resultStretegy);
                }
            }
        }
    }

    async executarDAOCreate(entidadeBase: EntidadeBase) {
        const nameClass = entidadeBase.constructor.name;

        const getDAOForExecute = this.daos.filter((daoExecute) => {
            if (daoExecute.nameClass === nameClass) {
                return daoExecute.dao;
            }
        });

        await getDAOForExecute[0].dao.criar(entidadeBase);
    }
}

type DictionaryStrategy = {
    nameClass: string;
    strategys: Array<IStrategy>;
};

type DictionaryDAO = {
    nameClass: string;
    dao: IDAO;
};
