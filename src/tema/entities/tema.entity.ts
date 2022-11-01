import { IsNotEmpty, MaxLength } from "class-validator";
import { PostagemEntity} from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_tema"})
export class Tema{
    @PrimaryGeneratedColumn()
    id: number

    @MaxLength(150)
    @IsNotEmpty()
    @Column({length: 150, nullable: false})
    categoria: string

    @MaxLength(150)
    @IsNotEmpty()
    @Column({length: 150})
    filtro: string

    @OneToMany(() => PostagemEntity, (Postagem) => Postagem.tema)
    postagem: PostagemEntity[]
}