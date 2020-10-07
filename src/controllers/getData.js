const axios = require('axios');
const parserJsCssLinks = require('../parser/parser')

async function getData(url, type) {
  let rawHtml =''
  try {
    rawHtml = await axios.get(url)
  } catch(e) {
    throw new Error('Something goes wrong. Did you enter the correct address with the protocol?')
  }
  const data = parserJsCssLinks(rawHtml.data, type)
  return data
}

module.exports = getData