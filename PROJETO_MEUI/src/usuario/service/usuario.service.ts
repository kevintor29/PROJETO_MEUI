import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { UsuarioEntity } from "../entities/usuario.entity";



@Injectable()
 export class UsuarioServices{

    constructor(
        @InjectRepository(UsuarioEntity)
        private UsuarioRepositori: Repository<UsuarioEntity>
    ){}
    async findAll(): Promise<UsuarioEntity[]>{
       return await this.UsuarioRepositori.find({ 
         relations: {
            postagem: true
        }  
    })
    }
    async findById(id: number): Promise<UsuarioEntity> {
        let usuario = await this.UsuarioRepositori.findOne({
           where:{
            id
        }, relations: {
            postagem: true
        }

        })
        if (!usuario)
        throw new HttpException(`UsuarioEntity nao encontrado`,HttpStatus.NOT_FOUND)
        return usuario
    }
    async findByNome(nome: string):Promise<UsuarioEntity[]>{
        return await this.UsuarioRepositori.find({
            where:{
                nome: ILike(`%${nome}%`)
            }, relations: {
                postagem: true
            }
        })
    }
    async findByLogin(login: string):Promise<UsuarioEntity[]>{
       
        let plogin= await this.UsuarioRepositori.find({
            where:{
                login: ILike(`%${login}%`)
            }, relations: {
                postagem: true
            }
        })
       if(!plogin ){
            throw new HttpException(`login nao encontrado`,HttpStatus.NOT_FOUND)
        }
       return plogin
         
    }
    async findBySenha(senha: string):Promise<UsuarioEntity[]>{
        return await this.UsuarioRepositori.find({
            where:{
                senha: ILike(`%${senha}%`)
            }, relations: {
                postagem: true
            }
        })
    }
    async findByFoto(foto: string):Promise<UsuarioEntity[]>{
        return await this.UsuarioRepositori.find({
            where:{
                foto: ILike(`%${foto}%`)
            }, relations: {
                postagem: true
            }
        })
    }
    async create(usuario: UsuarioEntity):Promise<UsuarioEntity>{
       return await this.UsuarioRepositori.save(usuario)
    }
    async update(usuario: UsuarioEntity): Promise<UsuarioEntity>{
        let buscarUsuario= await this.findById(usuario.id)

        if(!buscarUsuario || !usuario.id)
        throw new HttpException(`UsuarioEntity nao foi encontrado`,HttpStatus.NOT_FOUND)

        return await this.UsuarioRepositori.save(usuario)
    }
    async delete(id: number): Promise<DeleteResult> {
        let buscarUsuario = await this.findById(id)

        if(!buscarUsuario)
            throw new HttpException('Usuario  não encontrado', HttpStatus.NOT_FOUND)

        return await this.UsuarioRepositori.delete(id)
    }
 }