const {expect} = require('chai');
const requestValidator = require('./requestValidator.js');

describe('requestValidator test', () => {
    it('throws Error by wrong method', () => {
        expect(()=>{requestValidator(
            {
                method: 'OPTIONS',
                uri: 'git.master',
                version: 'HTTP/1.1',
                message: '-recursive'
              }              
              
        )}).to.throw('Invalid request header: Invalid Method')
    });

    it('returns Object', () => {
        expect(()=>{requestValidator(
            {
                method: 'GET',
                uri: 'svn.public.catalog',
                version: 'HTTP/1.1',
                message: ''
              }                            
              
        )}).to.equal({
            method: 'GET',
            uri: 'svn.public.catalog',
            version: 'HTTP/1.1',
            message: ''
          });
    })
});