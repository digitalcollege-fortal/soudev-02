-- Quero saber quantos alunos possuem a versao 01 do cartao; --

-- Quantidade: 28518 --
SELECT COUNT(id) AS quantidade FROM tb_aluno WHERE cartao_acesso_versao = 1;

-- Quero saber quantos alunos possuem a versao 02 --
-- Quantidade: 1672 --
SELECT COUNT(id) AS quantidade FROM tb_aluno WHERE cartao_acesso_versao = 2;

-- Quero saber o nome e matricula dos alunos que possuem a versão cartao maior que 04 --
-- Quantidade: 158 --
SELECT nome, matricula FROM tb_aluno WHERE cartao_acesso_versao > 4;

-- Quero a quantidade de todos os alunos que começam com FRANCISCO no nome --
SELECT COUNT(*) FROM tb_aluno WHERE nome LIKE 'FRANCISCO%';

-- Quero a quantidade de todos os alunos que possuem o nome MARIA no nome
SELECT COUNT(*) FROM tb_aluno WHERE nome LIKE '%MARIA%';


-- Quantos alunos foram alterados entre 2021 e 2022 --
-- Quantidade: 17480 --
 SELECT COUNT(*) FROM tb_aluno WHERE data_alteracao LIKE '2021%' OR data_alteracao LIKE '2022%';

-- Quantidade: 17480 --
SELECT COUNT(*) FROM tb_aluno WHERE YEAR(data_alteracao) BETWEEN 2021 AND 2022;
SELECT COUNT(*) FROM tb_aluno WHERE data_alteracao BETWEEN 2021 AND 2022;


-- Quantidade: 17480 --
SELECT COUNT(*) FROM tb_aluno WHERE data_alteracao BETWEEN '2021-01-01' AND '2022-12-31';



- Quais os nome, matricula e data dos alunos alterados em Janeiro de 2022;
SELECT nome, matricula, data_alteracao FROM tb_aluno WHERE MONTH(data_alteracao) = 1 AND YEAR(data_alteracao) = 2022;
SELECT nome, matricula, data_alteracao FROM tb_aluno WHERE data_alteracao LIKE '2022-01%';
SELECT nome, matricula, data_alteracao FROM tb_aluno WHERE data_alteracao BETWEEN '2022-01-01' AND '2022-01-31';
