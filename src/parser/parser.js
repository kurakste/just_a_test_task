function parserJsCssLinks(data, tp) {
  if ((tp !== 'js') && (tp !== 'css')) {
    throw new Error('Parameter type must be \'js\' or \'css\'')
  }

  const cssTemplate = /("|')\S+\.css\S*("|')/g
  const jsTemplate = /src=("|')\S+\.js\S*("|')/g

  const template = (tp === 'js') ? jsTemplate : cssTemplate
  const parsed = data.match(template) || []
  const startCutString = (tp === 'js') ? 5 : 1
  const out = parsed.map(el => {
    const end = el.length - startCutString - 1
    const a = el.substr(startCutString, end)
    return a
  })
  return out
}

module.exports = parserJsCssLinks