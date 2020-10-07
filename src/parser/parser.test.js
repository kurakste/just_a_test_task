const sampleOne = require('./exmpl/rbc')
const sampleTwo = require('./exmpl/stackoverflow')
const parserJsCssLinks = require('./parser')

test('Without type or with wrang type has to throw error', () => {
  expect(() => parserJsCssLinks(sampleOne, 'jws')).toThrow()
  expect(() => parserJsCssLinks(sampleOne, '')).toThrow()
  expect(() => parserJsCssLinks(sampleOne)).toThrow()
  expect(() => parserJsCssLinks(sampleOne, 'tse')).toThrow()
})

test('stackOverflow css', () => {
  const data = parserJsCssLinks(sampleTwo, 'css')
  expect(Array.isArray(data)).toBe(true)
  expect(data.length).toBe(4)
})

test('stackOverflow js', () => {
  const data = parserJsCssLinks(sampleTwo, 'js')
  expect(Array.isArray(data)).toBe(true)
  expect(data.length).toBe(2)
})

test('stackOverflow js', () => {
  const data = parserJsCssLinks(sampleOne, 'css')
  expect(Array.isArray(data)).toBe(true)
  expect(data.length).toBe(1)
})

test('stackOverflow js', () => {
  const data = parserJsCssLinks(sampleOne, 'js')
  expect(Array.isArray(data)).toBe(true)
  expect(data.length).toBe(1)
})
