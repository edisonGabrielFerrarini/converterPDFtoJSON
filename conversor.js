const pdf = require('pdf-parse');

module.exports.converterPDFToJson = (bufferFile) => {  
  return new Promise((resolve, reject) => {
    pdf(bufferFile).then((data) => {
      resolve({ ...data.text.split("\n") })
    });
  })
} 