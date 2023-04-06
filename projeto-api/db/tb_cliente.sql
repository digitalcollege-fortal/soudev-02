CREATE TABLE tb_clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR (100) NOT NULL
);

INSERT INTO tb_clientes (nome) VALUES ('Kelly');

CREATE TABLE tb_enderecos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endereco VARCHAR (100) NOT NULL,
    clienteID int,
    FOREIGN KEY (clienteID) REFERENCES tb_clientes(id)
);

INSERT INTO tb_enderecos (endereco, clienteID) VALUES ('Av Dom manuel 123', 4);

SELECT tb_clientes.id, tb_clientes.nome, tb_enderecos.endereco, tb_enderecos.id
FROM tb_clientes
INNER JOIN tb_enderecos ON tb_clientes.id = tb_enderecos.clienteID;
