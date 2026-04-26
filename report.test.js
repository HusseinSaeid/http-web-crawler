const { sortPages} = require('./report.js')
const { test, expect } = require('@jest/globals')

test('sortpages', () => {
    const input = {
        'https://www.wagslane.dev/path': 1,
        'https://www.wagslane.dev/': 3
    }
    const actual = sortPages(input)
    const expected = [
        ['https://www.wagslane.dev/', 3],
        ['https://www.wagslane.dev/path', 1]
    ]
    expect(actual).toEqual(expected)
})
