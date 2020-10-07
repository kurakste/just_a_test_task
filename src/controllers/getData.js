const axios = require('axios');
const parserJsCssLinks = require('../parser/parser')

async function getData(url, type) {
  let rawHtml =''
  try {
    rawHtml = await axios.get(url)
    // console.log('raw------>', rawHtml)
  } catch(e) {
    throw new Error('Something goes wrong. Did you enter the correct address with the protocol?')
  }
  const data = parserJsCssLinks(rawHtml.data, type)
  console.log('--------', data);
  return data
}

module.exports = getData