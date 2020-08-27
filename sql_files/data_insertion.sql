copy questions(id, product_id, body, date_written, asker_name, asker_email, reported, helpful)
from
'/Users/mtf/Desktop/questions.csv' delimiter ',' csv header;

copy answers(id, question_id, body, date_written, answerer_name, answerer_email, reported, helpful)
from
'/Users/mtf/Desktop/answers.csv' delimiter ',' csv header;

copy photos(id, answer_id, url)
from
'/Users/mtf/Desktop/answers_photos.csv' delimiter ',' csv header;
