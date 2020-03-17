const chai = require('chai')
const expect = chai.expect
const cipher = require('../src/cipher')

describe('Encode tests', () => {
    describe('encode', () => {
        it('Encoding of lowercase alphabet letters without any space', () => {
            expect(cipher.encode('abcdefghijklmnopqrstuvwxyz', 13)).to.equal('nopqrstuvwxyzabcdefghijklm')
        });
    })
    
})