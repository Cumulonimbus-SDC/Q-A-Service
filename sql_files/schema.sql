CREATE TABLE questions (
 id BIGSERIAL NOT NULL,
 product_id INTEGER,
 body VARCHAR,
 date_written VARCHAR,
 asker_name VARCHAR,
 asker_email VARCHAR,
 reported INTEGER,
 helpful INTEGER
);

ALTER TABLE questions ADD CONSTRAINT questions_pkey PRIMARY KEY (id);

CREATE TABLE answers (
 id BIGSERIAL,
 question_id INTEGER,
 body VARCHAR,
 date_written VARCHAR,
 answerer_name VARCHAR,
 answerer_email VARCHAR,
 reported INTEGER,
 helpful INTEGER
);

ALTER TABLE answers ADD CONSTRAINT answers_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL,
 answer_id INTEGER,
 url VARCHAR
);

ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

ALTER TABLE answers ADD CONSTRAINT answers_question_id_fkey FOREIGN KEY (question_id) REFERENCES questions(id);
ALTER TABLE photos ADD CONSTRAINT photos_answer_id_fkey FOREIGN KEY (answer_id) REFERENCES answers(id);

