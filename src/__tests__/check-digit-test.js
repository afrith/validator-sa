import { determineLuhnDigit, isValidSouthAfricanIDNumber } from '../'
describe('determineLuhnDigit', () => {
  it('determines a valid luhn digit', () => {
    expect(determineLuhnDigit('030111699908')).toBe(9)
    const idnosWithoutCheckDigit = [
      '720401682308',
      '720501682308',
      '720601682308',
      '720701682308',
      '100801682308',
      '100901682308',
      '101001682308',
      '101101682308',
      '101201682308',
    ]

    for (const part of idnosWithoutCheckDigit) {
      const luhn = determineLuhnDigit(part)
      console.log('idno:', part + luhn)
      expect(isValidSouthAfricanIDNumber(part + luhn)).toBe(true)
    }
  })
})