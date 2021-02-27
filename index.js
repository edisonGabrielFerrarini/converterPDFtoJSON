const converter = require('./conversor')

const fs = require("fs");
let dataBuffer = fs.readFileSync('statement.pdf');

converter.converterPDFToJson(dataBuffer).then(resp => console.log(resp))