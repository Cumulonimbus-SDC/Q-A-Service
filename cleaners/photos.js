const csv = require("csv-parser");
const createCsvStringifier = require("csv-writer").createObjectCsvStringifier;
const fs = require('fs');
const Transform = require("stream").Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: "id", title: "id" },
    { id: "answer_id", title: "answer_id" },
    { id: "url", title: "url" },
  ],
});

let readStream = fs.createReadStream("../../CSVs/answers_photos.csv");
let writeStream = fs.createWriteStream("../../CSVs/cleanAnswers_photos.csv");

class CSVCleaner extends Transform {
  constructor(options) {
    super(options);
  }
  _transform(chunk, encoding, next) {
    for (let key in chunk) {
      let trimKey = key.trim();
      chunk[trimKey] = chunk[key];
      if (key !== trimKey) {
        delete chunk[key];
      }
    }
    let onlyNumbersA = chunk.id.replace(/\D/g, "");
    chunk.id = onlyNumbersA;
    let onlyNumbersB = chunk.answer_id.replace(/\D/g, "");
    chunk.answer_id = onlyNumbersB;
    chunk = csvStringifier.stringifyRecords([chunk]);
    this.push(chunk);
    next();
  }
}

const transformer = new CSVCleaner({ writableObjectMode: true });

writeStream.write(csvStringifier.getHeaderString());

readStream
  .pipe(csv())
  .pipe(transformer)
  .pipe(writeStream)
  .on("finish", () => {
    console.log("finished");
  });

