CREATE DATABASE ng_games_db;

USE ng_games_db;

CREATE TABLE game(
    id INT(11) NOT NULL PRIMARY AUTO_INCREMENT KEY,
    title VARCHAR (180),
    description VARCHAR (255),
    image VARCHAR (200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

RENAME TABLE game TO games;

DESCRIBE game;
