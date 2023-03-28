UPDATE tb_aluno SET
    matricula='12345678',
    nome='CHIQUIM'
WHERE 
    id='8';

DELETE FROM tb_aluno
WHERE matricula='12345678';

------------------------------------

CREATE TABLE tb_escola (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(100)
);

INSERT INTO tb_escola 
    (nome, endereco)
VALUES
    ('Digital College Aldeota', 'Av Santos Dumont, 1510 - Aldeota');


INSERT INTO tb_escola 
    (nome, endereco)
VALUES
    ('Digital College Sul', 'Av Washington Soares - Edson Queiroz');

INSERT INTO tb_escola 
    (nome, endereco)
VALUES
    ('Escola de Gestao Publica', 'Centro administrativo do Cambeba');


INSERT INTO tb_escola 
    (nome, endereco)
VALUES
    ('Escola de Gastronomia', 'Centro, Fortaleza-CE');

--------------------------
UPDATE tb_aluno
    SET escola_id=1
WHERE escola_id BETWEEN 20 AND 21;

UPDATE tb_aluno
    SET escola_id = 2
WHERE 
    escola_id=12 OR escola_id=13 OR escola_id=17;

UPDATE tb_aluno
    SET escola_id = 3
WHERE 
    escola_id=30 OR escola_id=27 OR escola_id=28;


SELECT 
    tb_aluno.nome as aluno,
    tb_escola.nome as escola
FROM
    tb_aluno INNER JOIN tb_escola
ON 
    tb_aluno.escola_id = tb_escola.id
LIMIT 10;
----------------------
