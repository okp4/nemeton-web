import { normalizeString } from './utils'

describe('normalizeString', () => {
  it('string trims and converts to lowercase', () => {
    const inputText = '   Test, Test!   '
    const expectedOutput = 'test, test!'

    const result = normalizeString(inputText)
    expect(result).toEqual(expectedOutput)
  })

  it('handles an already trimmed and lowercase string', () => {
    const inputText = 'test, test!'
    const expectedOutput = 'test, test!'

    const result = normalizeString(inputText)
    expect(result).toEqual(expectedOutput)
  })

  it('handles an empty string', () => {
    const inputText = ''
    const expectedOutput = ''

    const result = normalizeString(inputText)
    expect(result).toEqual(expectedOutput)
  })

  it('handles a string with only spaces', () => {
    const inputText = '      '
    const expectedOutput = ''

    const result = normalizeString(inputText)
    expect(result).toEqual(expectedOutput)
  })
})
