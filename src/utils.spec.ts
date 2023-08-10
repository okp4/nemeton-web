import { normalizeString } from './utils'

type Data = {
  inputText: string
  expectedOutput: string
}

describe('Considering the normalizeString() function', () => {
  describe.each`
    inputText               | expectedOutput
    ${'   Test, Test!   '}  | ${'test, test!'}
    ${'test, test!'}        | ${'test, test!'}
    ${''}                   | ${''}
    ${'     '}              | ${''}
    ${'   TEst, TEsT!@#  '} | ${'test, test!@#'}
  `('Given an input <"$inputText">', ({ inputText, expectedOutput }: Data) => {
    describe('When normalizing the given input', () => {
      const result = normalizeString(inputText)
      test(`Then, expect result to strictly equals ${expectedOutput}`, () => {
        expect(result).toStrictEqual(expectedOutput)
      })
    })
  })
})
