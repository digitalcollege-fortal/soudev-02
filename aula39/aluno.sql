CREATE TABLE tb_aluno (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL,
    cpf CHAR (14),
    matricula CHAR(10),
    cartao_acesso CHAR (12),
    cartao_versao INT,
    data_alteracao VARCHAR (30)
);

ALTER TABLE tb_aluno 
ADD COLUMN escola_id INT;

ALTER TABLE tb_aluno
RENAME COLUMN cartao_versao TO cartao_acesso_versao;
