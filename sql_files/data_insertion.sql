copy questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
from
'/Users/mtf/Desktop/SDC-Project/CSVs/cleanQuestions.csv' delimiter ',' csv header;

copy answers(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful) 
from 
'/Users/mtf/Desktop/SDC-Project/CSVs/cleanAnswers.csv' delimiter ',' csv header;

copy photos(id, answer_id, url) from '/Users/mtf/Desktop/SDC-Project/CSVs/cleanAnswers_photos.csv' delimiter ',' csv header;

select setval('questions_id_seq', (select max(id) from questions));

select setval('answers_id_seq', (select max(id) from answers));

select setval('photos_id_seq', (select max(id) from photos));

CREATE INDEX pid_index ON questions (product_id);

CREATE INDEX qid_index ON answers (question_id);

CREATE INDEX aid_index ON photos (answer_id);
