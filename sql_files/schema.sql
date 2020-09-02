CREATE DATABASE qa;

CREATE TABLE questions (
 id SERIAL PRIMARY KEY,
 product_id INTEGER,
 body VARCHAR,
 date_written VARCHAR,
 asker_name VARCHAR,
 asker_email VARCHAR,
 reported INTEGER DEFAULT 0,
 helpful INTEGER DEFAULT 0
);

CREATE TABLE answers (
 id SERIAL PRIMARY KEY,
 question_id INTEGER,
 body VARCHAR,
 date_written VARCHAR,
 answerer_name VARCHAR,
 answerer_email VARCHAR,
 reported INTEGER DEFAULT 0,
 helpful INTEGER DEFAULT 0
);

CREATE TABLE photos (
 id SERIAL PRIMARY KEY, 
 answer_id INTEGER,
 url VARCHAR
);

ALTER TABLE answers ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE photos ADD CONSTRAINT photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES answers(id);

