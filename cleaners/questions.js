const csv = require("csv-parser");
const createCsvStringifier = require("csv-writer").createObjectCsvStringifier;
const fs = require('fs');
const Transform = require("stream").Transform;

const csvStringifier = createCsvStringifier({
  header: [
    { id: "id", title: "id" },
    { id: "product_id", title: "product_id" },
    { id: "body", title: "body" },
    { id: "date_written", title: "date_written" },
    { id: "asker_name", title: "asker_name" },
    { id: "asker_email", title: "asker_email" },
    { id: "reported", title: "reported" },
    { id: "helpful", title: "helpful" },
  ],
});

let readStream = fs.createReadStream("../../CSVs/questions.csv");
let writeStream = fs.createWriteStream("../../CSVs/cleanQuestions.csv");

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
    let onlyNumbersB = chunk.product_id.replace(/\D/g, "");
    chunk.product_id = onlyNumbersB;
    let onlyNumbersC = chunk.reported.replace(/\D/g, "");
    chunk.reported = onlyNumbersC;
    let onlyNumbersD = chunk.helpful.replace(/\D/g, "");
    chunk.helpful = onlyNumbersD;
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

