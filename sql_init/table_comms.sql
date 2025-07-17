CREATE TABLE comms (
id_comm BIGINT NOT NULL PRIMARY KEY,
text VARCHAR(3000) NOT NULL,
id_state BIGINT NOT NULL,
id_comm_owner BIGINT NOT NULL
);

CREATE TABLE anonms (
id_anon BIGINT NOT NULL PRIMARY KEY,
count_comm INT NOT NULL
);


CREATE TABLE states (
id_state BIGINT NOT NULL PRIMARY KEY,
title VARCHAR(300) NOT NULL,
text VARCHAR(5000) NOT NULL,
id_owner BIGINT NOT NULL
);

CREATE TABLE users (
id_user BIGINT NOT NULL PRIMARY KEY,
username VARCHAR(300) NOT NULL,
email VARCHAR(320) NOT NULL,
password VARCHAR(100) NOT NULL,
role VARCHAR(100) NOT NULL
);

CREATE TABLE files3 (
id_state BIGINT NOT NULL,
filename VARCHAR(300) NOT NULL
);

INSERT INTO users (id_user, username, email, password, role) VALUES (1234, 'Rodion', 'Rodion@yandex.ru', '12345', 'admin');