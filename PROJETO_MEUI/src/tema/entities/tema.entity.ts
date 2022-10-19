import { IsNotEmpty, MaxLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}