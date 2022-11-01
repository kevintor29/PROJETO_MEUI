import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { PostagemEntity } from "src/postagem/entities/postagem.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"tb_usuario"})
export class UsuarioEntity{

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
@Column({length: 1000, nullable: false})
@ApiProperty()
    nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    @ApiProperty({ example: "email@email.com.br"})
    usuario: string

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 1000, nullable: false})
    @ApiProperty()
    senha: string
    
    @IsNotEmpty()
    @Column({length: 5000})
    @ApiProperty()
    foto: string

    @ApiProperty({ type: () => PostagemEntity})
    @OneToMany(() => PostagemEntity, (Postagem) => Postagem.usuario)
    postagem: PostagemEntity[]
}