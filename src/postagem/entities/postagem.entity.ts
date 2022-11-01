import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { UsuarioEntity } from "src/usuario/entities/usuario.entity";
import { Entity, PrimaryGeneratedColumn,Column ,UpdateDateColumn, ManyToOne  } from "typeorm";

@Entity ({name: "tb_postagem"})
  export class PostagemEntity{
    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(50)
@Column({length: 1000, nullable: false})
    titulo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    conteudo: string

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    imagem: string
   
    @ManyToOne(() => Tema, (tema) => tema.id, {
      onDelete: "CASCADE"
  })
  tema: Tema[]

  @ManyToOne(() => UsuarioEntity, (usuario) => usuario.id, {
    onDelete: "CASCADE"
})
usuario: UsuarioEntity[]



}

function IsNotempty() {
    throw new Error("Function not implemented.");
}