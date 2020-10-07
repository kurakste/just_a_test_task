function parserJsCssLinks(data, tp) {
  if ((tp !== 'js') && (tp !== 'css')) {
    throw new Error('Parameter type must be \'js\' or \'css\'')
  }

  const cssTemplate = /"\S+\.css\S*"/g
  const jsTemplate = /src="\S+\.js\S*"/g

  const template = (tp === 'js') ? jsTemplate : cssTemplate
//  <script async src="https://cdn.onthe.io/io.js?k6rtDKrNVwkr"></script>
// src="//s.rbk.ru/v10_rbcnews_static/common/common-10.4.12/scripts/build/_core.js"></script>
//href="//s.rbk.ru/v10_rbcnews_static/common/common-10.4.12/scripts/build/_core.js"
  const parsed = data.match(template) || []
  console.log('parsed:', parsed)
  const startCutString = (tp === 'js') ? 5 : 1
  const out = parsed.map(el => {
    const end = el.length - startCutString - 1
    const a = el.substr(startCutString, end)
    return a
  })

  console.log(`parsing type: ${tp}`, out, out.length)
  return out
}

module.exports = parserJsCssLinks