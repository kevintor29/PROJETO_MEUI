create database db_projeto_MEUI;
use db_projeto_MEUI;
create table tb_usuario(
id bigint(150) auto_increment,
nome varchar(200) not null,
usuario varchar(200)not null,
senha varchar(200)not null,
foto longblob,
primary key (id)
);
create table tb_tema(
id bigint(150) auto_increment,
categoria varchar(200) not null,
filtro varchar(200) not null,
primary key (id)
);

create table tb_postagem(
id bigint(150) auto_increment,
titulo varchar(200) not null,
conteudo varchar(500) not null,
imagem longblob ,
id_usuario bigint(150),
id_tema bigint(150),
primary key (id),
foreign key (id_usuario) references tb_usuario (id),
foreign key (id_tema) references tb_tema (id)
)
