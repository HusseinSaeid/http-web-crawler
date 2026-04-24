const {normalizeURL}= require('./crawl.js')
const {test,expect} = require('@jest/globals')

test('normalizeURL stripe protocol', ()=>{
    const input  = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
test('normalizeURL stripe slach', ()=>{
    const input  = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
test('normalizeURL capitals', ()=>{
    const input  = 'https://Blog.Boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})