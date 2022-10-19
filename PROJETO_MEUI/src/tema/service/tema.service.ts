import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Tema } from "../entities/tema.entity";

@Injectable()
 export class TemaServices{

    constructor(
        @InjectRepository(Tema)
        private TemaRepository: Repository<Tema>
    ){}
    async findAll(): Promise<Tema[]>{
       return await this.TemaRepository.find({   
    })
    }
    async findById(id: number): Promise<Tema> {
        let tema = await this.TemaRepository.findOne({
           where:{
            id
        } 
        })
        if (!tema)
        throw new HttpException(`Tema nao encontrado`,HttpStatus.NOT_FOUND)
        return tema
    }
    async findByCategoria(categoria: string):Promise<Tema[]>{
        return await this.TemaRepository.find({
            where:{
                categoria: ILike(`%${categoria}%`)
            }
        })
    }
    async findByFiltro(filtro: string):Promise<Tema[]>{
        return await this.TemaRepository.find({
            where:{
                filtro: ILike(`%${filtro}%`)
            }
        })
    }
    async create(tema: Tema):Promise<Tema>{
       return await this.TemaRepository.save(tema)
    }
    async update(tema: Tema): Promise<Tema>{
        let buscarTema= await this.findById(tema.id)

        if(!buscarTema || !tema.id)
        throw new HttpException(`Tema nao foi encontrado`,HttpStatus.NOT_FOUND)

        return await this.TemaRepository.save(tema)
    }
    async delete(id: number): Promise<DeleteResult> {
        let buscartema = await this.findById(id)

        if(!buscartema)
            throw new HttpException('Postagem não encontrada', HttpStatus.NOT_FOUND)

        return await this.TemaRepository.delete(id)
    }
 }
