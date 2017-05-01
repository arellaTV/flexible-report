const fs = require('fs');
const { fields, fill } = require('pdf-form-fill');

const sourcePDF = `${__dirname}/test.pdf`;
const destinationPDF = `${__dirname}/test_complete.pdf`;
console.log(sourcePDF);

fields(sourcePDF)
  .then(shape => console.log(shape))
  .catch(err => console.log(err));

console.log('underneath');

