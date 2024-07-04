CREATE DATABASE movie_sagas_db;
USE movie_sagas_db;

CREATE TABLE sagas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    start_year YEAR
);

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date INT,
    description varchar(300),
    genre VARCHAR(100),
    saga_id INT,
    FOREIGN KEY (saga_id) REFERENCES sagas(id)
);

CREATE TABLE reviews (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    review TEXT,
    rating FLOAT,
    reviewer_name VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES movies(id)
);

CREATE TABLE actors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    birthdate DATE,
    nationality VARCHAR(100)
);

CREATE TABLE directors (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(100) NOT NULL,
  birth_date date,
  nationality varchar(50)
);

CREATE TABLE movie_actors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT,
    actor_id INT,
    role VARCHAR(100),
    FOREIGN KEY (movie_id) REFERENCES movies(id),
    FOREIGN KEY (actor_id) REFERENCES actors(id)
);

CREATE TABLE movie_director (
  id int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_id int(11),
  director_id int(11),
  KEY movie_id (movie_id),
  KEY director_id (director_id),
  CONSTRAINT movie_director_ibfk_1 FOREIGN KEY (movie_id) REFERENCES movies (id) ON DELETE NO ACTION,
  CONSTRAINT movie_director_ibfk_2 FOREIGN KEY (director_id) REFERENCES directors (id) ON DELETE NO ACTION
);