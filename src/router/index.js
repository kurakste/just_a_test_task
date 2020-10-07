const Router = require('koa-router')
const parsLinks = require('../parser/parser')
const router = new Router()
const getData = require('../controllers/getData')
 
// router.get('/', (ctx, next) => {
//   ctx.body = getMainPage()
// })

router.get('/get-css-links', async (ctx, next) => {
  let status = 'success'
  let errorMessage = ''
  let jsLinks, cssLinks
  const urlQueryObject = ctx.request.query
  try {
    if (!urlQueryObject['addr']) {
      throw new Error('addr is a required parameter in this request')
    }
    jsLinks = await getData(urlQueryObject['addr'], 'js')
    cssLinks = await getData(urlQueryObject['addr'], 'css')

  } catch (e) {
    status = 'error'
    errorMessage = e.message
  }
  const data = {jsLinks, cssLinks}
  ctx.body = {
    status,
    errorMessage,
    payload: data
  };
})

module.exports = router