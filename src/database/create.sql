CREATE SCHEMA IF NOT EXISTS casestests;

create  table casestests.usuario(
    id serial PRIMARY KEY,
    nome text not null,
    email text not null
);

INSERT INTO casestests.usuario 
    (nome, email)
VALUES
    ('ITALO', 'ITALOCASSIO95@GMAIL.COM');

INSERT INTO casestests.usuario 
    (nome, email)
VALUES
    ('ADRIELLE', 'DRICADIADL@GMAIL.COM');

INSERT INTO casestests.usuario 
    (nome, email)
VALUES
    ('NARUTO', 'NARUTO@GMAIL.COM');